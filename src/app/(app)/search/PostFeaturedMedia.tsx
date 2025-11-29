
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import MediaAudio from "@/components/PostFeaturedMedia/MediaAudio";
import MediaVideo from "@/components/PostFeaturedMedia/MediaVideo";
import {TPost} from "@/data/types";
import GallerySlider from "@/app/(app)/search/GallerySlider";

interface Props {
  className?: string
  post: TPost
  isHover?: boolean
}

const PostFeaturedMedia: FC<Props> = ({ className, post, isHover = false }) => {


  const renderPostGallery = () => {
    return <GallerySlider handle={post.id} galleryImgs={post.images} />
  }


  const renderImage = () => {
    return (
      <Link href={`/post/${post.id}`}>
        <Image alt={post.title} fill className="object-cover" src={post.images[0]} sizes="(max-width: 600px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    )
  }

  return (
    <div className={clsx('relative size-full overflow-hidden', className)}>
        {renderPostGallery()}
    </div>
  )
}

export default PostFeaturedMedia
