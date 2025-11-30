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
    branch: string[];
    timeZoneCategory: string[];
    foodStyleCategory: string[];
};

export type TVPresidentRestaurant = TInfluencerRestaurant & {
    recommendation: boolean;
};

export type TTag = {
    name: string;
}

export type TCheckboxFilter = {
    label: string
    name: string
    tabUIType: 'checkbox'
    options: {
        name: string
        description?: string
        defaultChecked?: boolean
    }[]
}

export type TPriceRangeFilter = {
    name: string
    label: string
    tabUIType: 'price-range'
    min: number
    max: number
}

export type TSelectNumberFilter = {
    name: string
    label: string
    tabUIType: 'select-number'
    options: {
        name: string
        max: number
    }[]
}

// getRestaurantListFilterOptions() 반환 데이터 타입
export type TListFilterOption = {
    label: string;
    name: string;
    // 현재는 'checkbox'만 사용하지만, 확장을 고려해 union으로 정의
    tabUIType: TCheckboxFilter | TPriceRangeFilter | TSelectNumberFilter | string;
    options: {
        name: string;
        value: string;
        description?: string;
        defaultChecked?: boolean;
    }[];
};

// 옵션 그룹 배열 타입 (getRestaurantListFilterOptions() 전체 반환 타입)
export type TListFilterOptions = TListFilterOption[];