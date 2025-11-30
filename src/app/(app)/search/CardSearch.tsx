'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import PostCardLikeBtn from "@/components/PostCardLikeBtn";
import PostCardSaveBtn from "@/components/PostCardSaveBtn";
import PostCardCommentBtn from "@/components/PostCardCommentBtn";
import CategoryBadgeList from "@/components/CategoryBadgeList";
import PostFeaturedMedia from "@/app/(app)/search/PostFeaturedMedia";

import NameBadge from "@/app/(app)/search/NameBadge";
import {TPost} from "@/data/types";
import PostCardMeta from "@/app/(app)/search/PostCardMeta";

interface Props {
  className?: string
  post: TPost
  ratio?: string
  hiddenAuthor?: boolean
}

const CardSearch: FC<Props> = ({ className, post, hiddenAuthor = false, ratio = 'aspect-4/3' }) => {
  const { id, firstPostDate, badge, rating, author, name, title, summary, oneLineReviews, address, phoneNumber, tags, images } = post

  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className={clsx('group post-card-11 relative flex flex-col rounded-3xl bg-white dark:bg-white/5', className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={clsx('relative w-full shrink-0 overflow-hidden rounded-t-3xl', ratio)}>
        <PostFeaturedMedia post={post} isHover={isHover} />
      </div>
      <div className="absolute inset-x-3 top-3">
        <NameBadge name={name} handle={id} color={'indigo'} />
      </div>

      <div className="flex grow flex-col gap-y-3 rounded-b-3xl border p-4">
        {!hiddenAuthor ? <PostCardMeta post={post} hiddenAvatar={true} /> : <span className="text-xs text-neutral-500">{post.firstPostDate}</span>}
        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Link href={`/post/${id}`} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h3>

        <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1">
          <PostCardLikeBtn likeCount={0} liked={false} />
          <PostCardCommentBtn commentCount={0} handle={id} />
          {/*<PostCardSaveBtn className="ms-auto" readingTime={readingTime} bookmarked={bookmarked} />*/}
        </div>
      </div>
    </div>
  )
}

export default CardSearch
