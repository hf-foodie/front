export interface CustomLink {
  label: string
  href: string
  targetBlank?: boolean
}

export type TPost = {
    id: string;
    firstPostDate: string;
    badge: string;
    rating: number;
    author: string;
    name: string;
    title: string;
    subtitle: string;
    summary: string;
    oneLineReviews: string[];
    address: string;
    phoneNumber: string;
    tags: string[];
    images: string[];
    reviewCount?: number;
};

export type TInfluencerRestaurant = {
    id: string;
    title: string;
    handle: string;
    listingCategory: string;
    featuredImage: string;
    address: string;
    reviewStart: number;
    representative_menu: string;
    branch: string;
    timeZoneCategory: string[];
    foodStyleCategory: string[];
};

export type TVPresidentRestaurant = TInfluencerRestaurant & {
    recommendation: boolean;
};

export type TTag = {
    name: string;
}