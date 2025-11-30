'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import PageHeader from './page-header'
import PaginationWrapper from '@/components/PaginationWrapper'
import ListingFilterTabs from '@/app/(app)/influencer/ceo/ListingFilterTabs'
import RestaurantCard from '@/app/(app)/influencer/ceo/RestaurantCard'
import { getRestaurantLising, getRestaurantListFilterOptions } from '@/data/influencer-ceo'
import {TInfluencerRestaurant} from "@/data/types";

const ListingPageContent = ({ listings, filterOptions }: { listings: TInfluencerRestaurant[]; filterOptions: any; }) => {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const itemsPerPage = 8
  const totalPages = Math.ceil(listings.length / itemsPerPage)

  const currentListings = listings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="pb-28">
      <PageHeader></PageHeader>

      <div className="relative container mt-6 lg:mt-24">
        <ListingFilterTabs filterOptions={filterOptions} />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7 xl:grid-cols-2">
          {currentListings.map((listing) => (
            <RestaurantCard key={listing.id} data={listing} />
          ))}
        </div>
        <div className="mt-16 flex items-center justify-center">
          <PaginationWrapper totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
}

const Page = async () => {
  const filterOptions = await getRestaurantListFilterOptions()
  const listings = await getRestaurantLising()

  return (
    <Suspense>
      <ListingPageContent listings={listings} filterOptions={filterOptions} />
    </Suspense>
  )
}

export default Page
