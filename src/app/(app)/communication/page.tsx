'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PencilSquareIcon, ChatBubbleLeftEllipsisIcon, EyeIcon, LockClosedIcon, MegaphoneIcon } from '@heroicons/react/24/outline'
import Heading from '@/shared/Heading'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Pagination from '@/shared/Pagination'
import Input from '@/shared/Input'
import clsx from 'clsx'

// 1. 카테고리 타입 및 데이터 정의
type ForumCategory = '자율소통' | '맛집제보' | '기능요청' | '버그제보'
const CATEGORIES: ForumCategory[] = ['자율소통', '맛집제보', '기능요청', '버그제보']

const CATEGORY_STYLES: Record<ForumCategory, string> = {
  자율소통: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  맛집제보: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  기능요청: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  버그제보: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
}

// 2. 게시글 데이터 타입 확장
interface ForumPost {
  id: number
  title: string
  author: {
    name: string
    avatar: string
  }
  date: string
  commentsCount: number
  viewsCount: number
  category: ForumCategory
  isPinned?: boolean
  isLocked?: boolean
}

// 3. 목업 데이터 수정
const DEMO_POSTS: ForumPost[] = [
  {
    id: 1,
    title: '맛집 제보 게시판 이용 안내',
    author: { name: '관리자', avatar: '/images/avatars/avatar-1.png' },
    date: '2024.07.30',
    commentsCount: 5,
    viewsCount: 3120,
    isPinned: true,
    category: '맛집제보',
  },
  {
    id: 2,
    title: '강남역 근처 숨겨진 파스타 맛집 공유합니다!',
    author: { name: '면사랑', avatar: '/images/avatars/avatar-2.png' },
    date: '2024.07.29',
    commentsCount: 18,
    viewsCount: 2541,
    category: '맛집제보',
  },
  {
    id: 3,
    title: '음식 종류별(한식, 중식, 일식) 필터 기능 추가해주세요.',
    author: { name: '개발요정', avatar: '/images/avatars/avatar-3.png' },
    date: '2024.07.29',
    commentsCount: 3,
    viewsCount: 890,
    category: '기능요청',
  },
  {
    id: 4,
    title: '검색창에 특정 단어 입력 시 앱이 종료됩니다.',
    author: { name: '버그헌터', avatar: '/images/avatars/avatar-4.png' },
    date: '2024.07.28',
    commentsCount: 7,
    viewsCount: 450,
    category: '버그제보',
  },
  {
    id: 5,
    title: '[답변완료] 해당 버그는 수정되었습니다.',
    author: { name: '관리자', avatar: '/images/avatars/avatar-1.png' },
    date: '2024.07.27',
    commentsCount: 2,
    viewsCount: 1280,
    isLocked: true,
    category: '버그제보',
  },
  {
    id: 6,
    title: '다들 최애 치킨 메뉴가 뭔가요? 저는 황금올리브!',
    author: { name: '치킨매니아', avatar: '/images/avatars/avatar-5.png' },
    date: '2024.07.26',
    commentsCount: 35,
    viewsCount: 4832,
    category: '자율소통',
  },
]

const CommunicationPage = () => {
  const [searchType, setSearchType] = useState('title')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(DEMO_POSTS)

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredPosts(DEMO_POSTS)
      return
    }

    const lowercasedTerm = searchTerm.toLowerCase()
    const results = DEMO_POSTS.filter((post) => {
      if (searchType === 'title') {
        return post.title.toLowerCase().includes(lowercasedTerm)
      }
      if (searchType === 'author') {
        return post.author.name.toLowerCase().includes(lowercasedTerm)
      }
      return false
    })

    setFilteredPosts(results)
  }, [searchTerm, searchType])

  return (
    <div className="container py-16 lg:py-28">
      {/* 게시판 헤더 */}
      <div className="mb-12 flex flex-col gap-y-6">
        <div className="w-full text-center">
          <Heading>소통 게시판</Heading>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <select
              name="search-type"
              id="search-type"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="h-12 rounded-full border-neutral-200 bg-white pe-9 ps-4 text-base shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-primary-500"
            >
              <option value="title">제목</option>
              <option value="author">작성자</option>
            </select>
            <Input
              type="search"
              placeholder="게시글 검색..."
              className="min-w-[240px] rounded-full"
              sizeClass="h-12 px-5"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ButtonPrimary href="/communication/new" className="shrink-0">
            <PencilSquareIcon className="mr-2 h-5 w-5" />
            글쓰기
          </ButtonPrimary>
        </div>
      </div>

      {/* 게시글 목록 */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
        <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {/* 테이블 헤더 */}
          <div className="hidden bg-neutral-100/70 px-6 py-3 text-sm font-medium text-neutral-600 dark:bg-neutral-800/50 dark:text-neutral-400 md:grid md:grid-cols-12">
            <div className="md:col-span-7">제목</div>
            <div className="md:col-span-2">작성자</div>
            <div className="hidden text-center md:col-span-1 md:block">댓글</div>
            <div className="hidden text-center md:col-span-1 md:block">조회수</div>
            <div className="text-right md:col-span-1">날짜</div>
          </div>

          {/* 게시글 반복 */}
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="grid cursor-pointer grid-cols-12 items-center gap-x-2 px-6 py-4 transition-colors hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50"
              >
                {/* 제목 */}
                <div className="col-span-12 flex items-center gap-x-3 md:col-span-7">
                  <span
                    className={clsx(
                      'shrink-0 rounded-full px-2.5 py-1 text-xs font-medium',
                      CATEGORY_STYLES[post.category]
                    )}
                  >
                    {post.category}
                  </span>
                  {post.isPinned && <MegaphoneIcon className="h-5 w-5 shrink-0 text-red-500" title="고정글" />}
                  {post.isLocked && <LockClosedIcon className="h-5 w-5 shrink-0 text-neutral-500" title="잠긴글" />}
                  <Link href={`javascript:void(0)`} className="font-semibold hover:underline">
                    {post.title}
                  </Link>
                </div>

                {/* 작성자 */}
                <div className="col-span-8 mt-2 text-sm text-neutral-600 dark:text-neutral-400 md:col-span-2 md:mt-0">
                  <span>{post.author.name}</span>
                </div>

                {/* 댓글 수 */}
                <div className="col-span-2 hidden items-center justify-center gap-x-1 text-sm md:col-span-1 md:flex">
                  <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
                  <span>{post.commentsCount}</span>
                </div>

                {/* 조회수 */}
                <div className="col-span-2 hidden items-center justify-center gap-x-1 text-sm md:col-span-1 md:flex">
                  <EyeIcon className="h-4 w-4" />
                  <span>{post.viewsCount}</span>
                </div>

                {/* 날짜 */}
                <div className="col-span-4 mt-2 text-right text-sm text-neutral-500 md:col-span-1 md:mt-0">
                  {post.date}
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-neutral-500">검색 결과가 없습니다.</div>
          )}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="mt-12">
        <Pagination />
      </div>
    </div>
  )
}

export default CommunicationPage
