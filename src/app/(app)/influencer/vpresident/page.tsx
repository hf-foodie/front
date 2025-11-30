'use client'

import PageHeader from "@/app/(app)/influencer/vpresident/page-header";
import {getRestaurantLising, getRestaurantListFilterOptions} from "@/data/influencer-vpresident";
import ListingFilterTabs from "@/app/(app)/influencer/vpresident/ListingFilterTabs";
import RestaurantCard from "@/app/(app)/influencer/vpresident/RestaurantCard";
import PaginationWrapper from "@/components/PaginationWrapper";
import {TInfluencerRestaurant, TListFilterOptions, TVPresidentRestaurant} from "@/data/types";
import {Suspense} from "react";
import {useSearchParams} from "next/navigation";

const ListingPageContent = ({ listings, filterOptions }: { listings: TVPresidentRestaurant[]; filterOptions: TListFilterOptions; }) => {
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1
    const q = (searchParams.get('q') || '').toLowerCase().trim()
    const filteredListings = q
        ? listings.filter((l) =>
            [l.title, l.branch, l.address]
                .filter(Boolean)
                .some((field) => String(field).toLowerCase().includes(q))
        )
        : listings
    const itemsPerPage = 8
    const totalPages = Math.ceil(filteredListings.length / itemsPerPage)

    const currentListings = filteredListings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

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
