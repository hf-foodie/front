
import Avatar from '@/shared/Avatar'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import {TPost} from "@/data/types";
import LocalDate from "@/components/LocalDate";
import {HugeiconsIcon} from "@hugeicons/react";
import {StarsIcon} from "@hugeicons/core-free-icons";

interface Props {
  className?: string
  post: TPost
  hiddenAvatar?: boolean
  avatarSize?: string
}

const PostCardMeta: FC<Props> = ({ className, post, hiddenAvatar = false, avatarSize = 'size-7' }) => {

  return (
      <div className={clsx('post-card-meta flex flex-wrap items-center text-xs/6', className)}>
          <div className="relative flex items-center gap-x-2.5">
              <Link href={`/search?c=author&s=${post.name}`} className="absolute inset-0" />
              <span className="block font-semibold text-neutral-900 dark:text-neutral-300">{post.author}</span>
          </div>
          <>
              <span className="mx-1.5 font-medium text-neutral-500 dark:text-neutral-400">·</span>
              <span className="font-normal text-neutral-500 dark:text-neutral-400">
                <LocalDate date={post.firstPostDate} />
              </span>
          </>
      </div>
  )
}

export default PostCardMeta
