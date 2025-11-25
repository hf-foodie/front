
import { Divider } from '@/shared/divider'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import MagazineCardMeta from "@/components/SectionMagazine/Card/MagazineCardMeta";
import PostCardLikeBtn from "@/components/PostCardLikeBtn";
import PostCardCommentBtn from "@/components/PostCardCommentBtn";
import PostCardSaveBtn from "@/components/PostCardSaveBtn";
import MagazineBadgeList from "@/components/SectionMagazine/Badge/MagazineBadgeList";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import {TMagazine} from "@/data/magazines";


interface Props {
  className?: string
  magazine: TMagazine
  size?: 'normal' | 'large'
}

const CardMain: FC<Props> = ({ className, size = 'normal', magazine }) => {
  const {
    names,
    title,
    featuredImage,
    handle,
    readingTime,
    postType,
    likeCount,
    liked,
    commentCount,
    bookmarked,
    excerpt,
  } = magazine

  return (
    <div className={clsx('group post-card-2 relative flex flex-col', className)}>
      <div className="relative z-0 block h-0 w-full shrink-0 grow pt-[75%] sm:pt-[55%]">
        <Image
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          className="size-full rounded-2xl object-fill brightness-100 transition-[filter] duration-300 group-hover:brightness-75"
          src={featuredImage}
          alt={title}
        />
        <Link href={`/magazine/${handle}`} className="absolute inset-0 z-0"></Link>
        <PostTypeFeaturedIcon
          className="absolute bottom-3 left-3"
          postType={postType}
          wrapSize="size-8"
          iconSize="size-4"
        />
        <MagazineBadgeList
          className="absolute top-3 left-3 flex flex-wrap space-x-2"
          itemClass="relative"
          names={names}
        />
      </div>

      <div className="mt-5 flex flex-col sm:px-4">
        <div className="space-y-3">
          <MagazineCardMeta className="relative text-sm"  meta={magazine} />
          <h2
            className={clsx(
              'post-card-title block font-semibold text-neutral-900 dark:text-neutral-100',
              size === 'large' ? 'text-base sm:text-lg md:text-xl' : 'text-base'
            )}
          >
            <Link href={`/magazine/${handle}`} className="line-clamp-2 text-3xl" title={title}>
              {title}
            </Link>
          </h2>
          <p className="block text-xl text-neutral-600 dark:text-neutral-400">{excerpt}</p>
        </div>

        <Divider className="my-5" />

        <div className="relative flex flex-wrap gap-x-2 gap-y-1">
          <PostCardLikeBtn likeCount={likeCount} liked={liked} />
          <PostCardCommentBtn commentCount={commentCount} handle={handle} />
          <PostCardSaveBtn className="ms-auto" readingTime={readingTime} bookmarked={bookmarked} />
        </div>
      </div>
    </div>
  )
}

export default CardMain
