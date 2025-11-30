import LocalDate from '@/components/LocalDate'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import {TPost} from "@/data/types";

interface Props extends Pick<TPost, 'firstPostDate' | 'author' > {
  className?: string,
    readingTime: number
}

const SingleMeta: FC<Props> = ({ className, firstPostDate, author, readingTime = 0 }) => {
  return (
    <div className={clsx('single-meta relative flex shrink-0 flex-wrap items-center text-sm', className)}>

      <div className="ms-3">
        <p className="block font-semibold">{author}</p>

        <div className="mt-1.5 flex items-center gap-x-2 text-xs">
          <span>
            <LocalDate date={firstPostDate} options={{ year: 'numeric', month: 'long', day: 'numeric' }} />
          </span>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>
      </div>

      <Link href={`/search?s=${author}`} className="absolute inset-0" />
    </div>
  )
}

export default SingleMeta
