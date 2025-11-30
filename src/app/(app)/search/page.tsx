import { getSearchResults } from '@/data/search'
import { getAllPosts } from '@/data/posts.server'
import SearchClient from './SearchClient'
import {Metadata} from "next";
import {redirect} from "next/navigation";

const filterTabs = [
  { name: '포스터',  value: 'posts'},
  { name: '태그', value: 'tags' },
]

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
    const { query } = await searchParams

    return {
        title: `Search results for ${query}`,
        description: `Search results for ${query}`,
    }
}

const PageSearch = async ({
                              params, searchParams
} : {
    params: Promise<{ query: string }>
    searchParams: SearchParams
}) => {
    let searchQuery = (await searchParams)['s']
    let searchTab = (await searchParams)['tab']
    const page = (await searchParams)['page']

    if (Array.isArray(searchQuery)) {
        searchQuery = searchQuery[0]
    }
    if (!searchQuery) {
        searchQuery = ''
    }

    if (searchTab && Array.isArray(searchTab)) {
        searchTab = searchTab[0]
    }
    if (!filterTabs.some((tab) => tab.value === searchTab)) {
        searchTab = filterTabs[0].value // default tab is posts
    }

    const currentPage = page ? parseInt(Array.isArray(page) ? page[0] : page, 10) : 1

    // Fetch all posts on initial access and pass them to the client
    const posts = await getAllPosts()

    // For tags tab, still fetch tags-related data
    let tags: any[] = []
    let totalResults = 0
    if (searchTab === 'tags') {
        const tagRes = await getSearchResults(
            searchQuery || '',
            'tags',
            currentPage,
            9999
        )
        tags = tagRes.tags || []
        totalResults = tagRes.totalResults || 0
    } else {
        totalResults = posts.length
    }


    return (
        <SearchClient
            posts={posts || []}
            tags={tags || []}
            totalResults={totalResults}
            searchQuery={searchQuery}
            searchTab={searchTab as 'posts' | 'tags'}
            currentPage={currentPage}
        />
    )
}

export default PageSearch
