import LocalDate from '@/components/LocalDate'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import {TPostDetail} from "@/data/posts.server";

interface Props extends Pick<TPostDetail, 'date' | 'author' | 'readingTime'> {
  className?: string
}

const SingleMeta: FC<Props> = ({ className, date, author, readingTime }) => {
  return (
    <div className={clsx('single-meta relative flex shrink-0 flex-wrap items-center text-sm', className)}>

      <div className="ms-3">
        <p className="block font-semibold">{author}</p>

        <div className="mt-1.5 flex items-center gap-x-2 text-xs">
          <span>
            <LocalDate date={date} options={{ year: 'numeric', month: 'long', day: 'numeric' }} />
          </span>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>
      </div>

      <Link href={`/author/${author.handle}`} className="absolute inset-0" />
    </div>
  )
}

export default SingleMeta
