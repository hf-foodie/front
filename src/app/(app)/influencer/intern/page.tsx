import PageHeader from './page-header'
import {getAuthorByHandle} from "@/data/authors";
import {getAllPosts} from "@/data/posts";
import PaginationWrapper from "@/components/PaginationWrapper";
import ListingFilterTabs from "@/app/(app)/influencer/intern/ListingFilterTabs";
import {getRestaurantLising, getRestaurantListFilterOptions} from "@/data/influencer-intern";
import RestaurantCard from "@/app/(app)/influencer/intern/RestaurantCard";

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {
    const author = await getAuthorByHandle('john-doe')
    const posts = (await getAllPosts()).slice(0, 10)
    const filterOptions = await getRestaurantListFilterOptions()
    const listings = await getRestaurantLising()

    return (
        <div className="pb-28">
            <PageHeader author={author}></PageHeader>

            <div className="relative container mt-6 lg:mt-24">
                <ListingFilterTabs filterOptions={filterOptions} />
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7 xl:grid-cols-2">
                    {listings.map((listing) => (
                        <RestaurantCard key={listing.id} data={listing} />
                    ))}
                </div>
                <div className="mt-16 flex items-center justify-center">
                    <PaginationWrapper className="mt-20" totalPages={10} />
                </div>
            </div>
        </div>
    )
}

export default Page
