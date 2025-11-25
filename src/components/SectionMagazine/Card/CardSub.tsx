import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {TMagazine} from "@/data/magazines";
import MagazineBadgeList from "@/components/SectionMagazine/Badge/MagazineBadgeList";
import MagazineCardMeta from "@/components/SectionMagazine/Card/MagazineCardMeta";
import PostCardLikeBtn from "@/components/PostCardLikeBtn";
import PostCardSaveBtn from "@/components/PostCardSaveBtn";
import PostCardCommentBtn from "@/components/PostCardCommentBtn";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";

interface Props {
  className?: string
  magazine: TMagazine
}

const CardSub: FC<Props> = ({ className, magazine }) => {
  const {
    title,
    names,
    handle,
    readingTime,
    featuredImage,
    postType,
    likeCount,
    liked,
    commentCount,
    bookmarked,
  } = magazine

  return (
    <div
      className={clsx(
        'group post-card-6 relative flex flex-wrap gap-5 rounded-3xl border border-neutral-200 bg-white p-4 sm:flex-nowrap dark:border-neutral-700 dark:bg-neutral-900',
        className
      )}
    >
      <div className="flex grow flex-col gap-y-2.5">
        <div className="space-y-3">
          <MagazineBadgeList names={names} />
          <h2 className="post-card-title block max-w-sm text-sm font-semibold sm:text-base">
            <Link href={`/post/${handle}`} className="line-clamp-1" title={title}>
              {title}
            </Link>
          </h2>
          <MagazineCardMeta meta={{ ...magazine }} />
        </div>
        <div className="relative mt-auto flex flex-wrap gap-x-2 gap-y-1">
          <PostCardLikeBtn likeCount={likeCount} liked={liked} />
          <PostCardCommentBtn commentCount={commentCount} handle={handle} />
          <PostCardSaveBtn className="ms-auto" readingTime={readingTime} bookmarked={bookmarked} />
        </div>
      </div>

      <Link href={`/post/${handle}`} className="relative block size-40 shrink-0">
        <Image
          sizes="(max-width: 600px) 50vw, 33vw"
          className="size-full rounded-2xl object-cover brightness-100 transition-[filter] duration-300 group-hover:brightness-75"
          fill
          src={featuredImage}
          alt={title}
        />
        <span className="absolute start-1 bottom-1">
          <PostTypeFeaturedIcon wrapSize="h-7 w-7" iconSize="h-4 w-4" postType={postType} />
        </span>
      </Link>
    </div>
  )
}

export default CardSub
