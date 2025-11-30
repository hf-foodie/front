import { getSearchResults } from '@/data/search'
import { Metadata } from 'next'
import SearchClient from './SearchClient'

const filterTabs = [
  { name: '포스터',  value: 'posts'},
  { name: '태그', value: 'tags' },
]

type SearchParams = { [key: string]: string | string[] | undefined }

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const { s: query } = searchParams

  return {
    title: `Search results for ${query}`,
    description: `Search results for ${query}`,
  }
}

const PageSearch = async ({ searchParams }: { searchParams: SearchParams }) => {
  let searchQuery = searchParams['s']
  let searchTab = searchParams['tab']
  const page = searchParams['page']

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

  const { posts, tags, totalResults, totalPages } = await getSearchResults(
    searchQuery || '',
    searchTab as 'posts' | 'tags',
    currentPage,
    9999
  )

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
