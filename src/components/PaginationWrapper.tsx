'use client'

import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/shared/Pagination'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useCallback } from 'react'

interface Props {
  totalPages?: number
  className?: string
}

function PaginationComponent({ totalPages = 1, className }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const renderPagination = () => {
    const pages = []
    const maxPagesToShow = 5 // Example: 1 ... 4 5 6 ... 10

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationPage key={i} href={`${pathname}?${createQueryString('page', i.toString())}`} current={currentPage === i}>
            {i}
          </PaginationPage>
        )
      }
    } else {
      // Logic to show pages with gaps (...)
      let startPage = Math.max(1, currentPage - 2)
      let endPage = Math.min(totalPages, currentPage + 2)

      if (currentPage < 3) {
        endPage = maxPagesToShow -1
      }
      if (currentPage > totalPages - 2) {
        startPage = totalPages - (maxPagesToShow - 2)
      }

      if (startPage > 1) {
        pages.push(
          <PaginationPage key={1} href={`${pathname}?${createQueryString('page', '1')}`}>
            1
          </PaginationPage>
        )
        if (startPage > 2) {
          pages.push(<PaginationGap key="start-gap" />)
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationPage key={i} href={`${pathname}?${createQueryString('page', i.toString())}`} current={currentPage === i}>
            {i}
          </PaginationPage>
        )
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(<PaginationGap key="end-gap" />)
        }
        pages.push(
          <PaginationPage key={totalPages} href={`${pathname}?${createQueryString('page', totalPages.toString())}`}>
            {totalPages}
          </PaginationPage>
        )
      }
    }
    return pages
  }

  return (
    <Pagination className={className}>
      <PaginationPrevious
        href={currentPage > 1 ? `${pathname}?${createQueryString('page', (currentPage - 1).toString())}` : undefined}
      />
      <PaginationList>{renderPagination()}</PaginationList>
      <PaginationNext
        href={
          currentPage < totalPages ? `${pathname}?${createQueryString('page', (currentPage + 1).toString())}` : undefined
        }
      />
    </Pagination>
  )
}

export default function PaginationWrapper(props: Props) {
  return (
    <Suspense>
      <PaginationComponent {...props} />
    </Suspense>
  )
}
