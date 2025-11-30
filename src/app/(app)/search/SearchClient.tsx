'use client'

import ArchiveSortByListBox from '@/components/ArchiveSortByListBox'
import ArchiveTabs from '@/components/ArchiveTabs'
import CardCategory2 from '@/components/CategoryCards/CardCategory2'
import PaginationWrapper from '@/components/PaginationWrapper'
import Input from '@/shared/Input'
import Tag from '@/shared/Tag'
import { Folder02Icon, LicenseIcon, Search01Icon, Tag02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import CardSearch from '@/app/(app)/search/CardSearch'
import { FC, useEffect, useState } from 'react'
import { TPost, TTag } from '@/data/types'

const POSTS_PER_PAGE = 8

const sortByOptions = [
  { name: 'Most recent', value: 'most-recent' },
  { name: 'Curated by admin', value: 'curated-by-admin' },
  { name: 'Most appreciated', value: 'most-appreciated' },
  { name: 'Most discussed', value: 'most-discussed' },
  { name: 'Most viewed', value: 'most-viewed' },
  { name: 'Most liked', value: 'most-liked' },
]
const filterTabs = [
  {
    name: '포스터',
    value: 'posts',
    icon: LicenseIcon,
  },
  { name: '태그', value: 'tags', icon: Tag02Icon },
]

interface SearchClientProps {
  posts: TPost[]
  tags: TTag[]
  totalResults: number
  searchQuery: string
  searchTab: 'posts' | 'tags'
  currentPage: number
}

const SearchClient: FC<SearchClientProps> = ({
  posts: initialPosts,
  tags,
  totalResults,
  searchQuery,
  searchTab,
  currentPage,
}) => {
  const [searchValue, setSearchValue] = useState(searchQuery)
  const [filteredPosts, setFilteredPosts] = useState(initialPosts)

  useEffect(() => {
    if (searchTab === 'posts') {
      const lowercasedFilter = searchValue.toLowerCase()
      const filtered = initialPosts.filter((post) => {
        return (
          post.name.toLowerCase().includes(lowercasedFilter) ||
          post.title.toLowerCase().includes(lowercasedFilter) ||
          post.author.toLowerCase().includes(lowercasedFilter)
        )
      })
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(initialPosts)
    }
  }, [searchValue, initialPosts, searchTab])

  useEffect(() => {
    setSearchValue(searchQuery)
  }, [searchQuery])

  const paginatedPosts =
    searchTab === 'posts'
      ? filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
      : []

  const postsTotalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  const renderLoopItems = () => {
    switch (searchTab) {

      case 'tags':
        return (
          <div className="mt-12 flex flex-wrap gap-3">
            {tags?.map((tag) => (
              <Tag key={tag.name} href={`/search?s=${tag.name}&tab=tag`}>
                {tag.name}
              </Tag>
            ))}
          </div>
        )

      default:
        return (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedPosts.map((post) => (
              <CardSearch key={post.id} post={post} />
            ))}
          </div>
        )
    }
  }

  return (
    <div className="search-page">
      {/* HEADER */}
      <div className="start-0 top-0 right-0 h-24 w-full bg-primary-100/50 2xl:h-28 dark:bg-white/10" />
      <div className="container">
        <header className="mx-auto -mt-8 flex max-w-2xl flex-col">
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="s">
              <span className="sr-only">Search</span>
              <Input
                id="s"
                name="s"
                type="search"
                placeholder="식당명, 제목, 작성자를 검색하세요"
                className="rounded-full shadow-lg"
                sizeClass="ps-14 py-5 pe-5 md:ps-16"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <span className="absolute start-5 top-1/2 -translate-y-1/2 transform text-2xl md:start-6">
                <HugeiconsIcon icon={Search01Icon} size={24} />
              </span>
            </label>
          </form>
          <p className="mt-4 block text-sm">
            We found {searchTab === 'posts' ? filteredPosts.length : totalResults} results articles for{' '}
            <strong>&quot;{searchValue}&quot;</strong>
          </p>
        </header>
      </div>

      <div className="container py-16 lg:pt-20">
        <div className="flex flex-wrap items-center gap-4">
          <ArchiveTabs tabs={filterTabs} />
          <ArchiveSortByListBox className="ms-auto shrink-0" filterOptions={sortByOptions} />
        </div>

        {/* LOOP ITEMS */}
        {renderLoopItems()}

        {/* PAGINATION */}
        {searchTab === 'posts' && postsTotalPages > 1 && (
          <PaginationWrapper className="mt-20" totalPages={postsTotalPages} />
        )}
      </div>
    </div>
  )
}

export default SearchClient
