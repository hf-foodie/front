import BtnLikeIcon from '@/components/BtnLikeIcon'
import SaleOffBadge from '@/components/SaleOffBadge'
import StartRating from '@/components/StartRating'
import { TCarListing } from '@/data/listings'
import { Badge } from '@/shared/Badge'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import {TRestaurant} from "@/data/types";

export interface CarCardHProps {
  className?: string
  data: TRestaurant
}

const RestaurantCard: FC<CarCardHProps> = ({ className = '', data }) => {
  const {
      id,
      title,
      handle,
      listingCategory,
      description,
      featuredImage,
      address,
      reviewStart,
      reviewCount,
      representative_menu,
      branch,
      timeZoneCategory,
      foodStyleCategory,
  } = data

  const listingHref = `/post/${handle}`

  const renderSliderGallery = () => {
    return (
      <div className="relative flex w-full shrink-0 items-center justify-center border-e border-neutral-200/80 md:w-72 dark:border-neutral-700">
        <div className="aspect-w-16 w-full aspect-h-9">
          <Image
            fill
            className="object-contain"
            src={featuredImage}
            alt={title}
            sizes="(max-width: 640px) 100vw, 350px"
          />
        </div>
        {/*<BtnLikeIcon*/}
        {/*  colorClass="text-white bg-black/20 hover:bg-black/30"*/}
        {/*  isLiked={like}*/}
        {/*  className="absolute end-3 top-3 z-1"*/}
        {/*/>*/}
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div className="flex grow flex-col p-3 sm:p-5">
        <div>
          <div className="flex items-center gap-x-2">
            <h2 className="text-xl font-semibold capitalize">
              <span className="line-clamp-1">{title} / {branch}</span>
            </h2>
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400">
            <StartRating point={reviewStart} />
            <span>·</span>
            <div className="flex items-center">
              <span className="hidden text-base sm:inline-block">
                <MapPinIcon className="h-4 w-4" />
              </span>
              <span className="line-clamp-1 sm:ms-2"> {address}</span>
            </div>
          </div>
        </div>
        <div className="my-4 w-14 border-b border-neutral-200/80 dark:border-neutral-700" />
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div className="text-sm text-neutral-700 dark:text-neutral-600">{representative_menu}</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white dark:border-neutral-700 dark:bg-neutral-900 ${className}`}
    >
      <Link href={listingHref} className="absolute inset-1 z-1"></Link>
      <div className="flex flex-col md:flex-row">
        {renderSliderGallery()}
        {renderContent()}
      </div>
    </div>
  )
}

export default RestaurantCard
