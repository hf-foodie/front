import { TPost } from '@/data/posts'
import Avatar from '@/shared/Avatar'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { TMagazine } from '@/data/magazines'
import LocalDate from "@/components/LocalDate";

interface Props {
  className?: string
  meta: Pick<TMagazine, 'date' | 'author'>
}

const PostCardMeta: FC<Props> = ({ className, meta }) => {
  const { date, author } = meta

  return (
    <div className={clsx('post-card-meta flex flex-wrap items-center text-xs/6', className)}>
      <div className="relative flex items-center gap-x-2.5">
        <Link href={`/author/${author.handle}`} className="absolute inset-0" />
        <span className="block font-semibold text-neutral-900 dark:text-neutral-300 text-base">{author.name}</span>
      </div>
      <>
        <span className="mx-1.5 font-medium text-neutral-500 dark:text-neutral-400">·</span>
        <span className="font-normal text-neutral-500 dark:text-neutral-400 text-base">
          <LocalDate date={date} />
        </span>
      </>
    </div>
  )
}

export default PostCardMeta
