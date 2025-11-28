import itaguksi from "@/images/influencer/이타국시.png";
import DunamjaJjimdak from "@/images/influencer/두남자찜닭.png";
import car2 from "@/images/cars/2.png";
import car3 from "@/images/cars/3.png";
import car4 from "@/images/cars/4.png";
import car5 from "@/images/cars/5.png";
import car6 from "@/images/cars/6.png";
import car7 from "@/images/cars/7.png";
import car8 from "@/images/cars/8.png";


export async function getRestaurantListFilterOptions() {
    return [
        {
            label: '점심/저녁',
            name: 'time-zone',
            tabUIType: 'checkbox',
            options: [
                {
                    name: '점심',
                    value: 'lunch',
                    description: '점심 식사에 주로 가는 맛집',
                    defaultChecked: true,
                },
                {
                    name: '저녁',
                    value: 'dinner',
                    description: '저녁 식사에 주로 가는 맛집',
                    defaultChecked: true,
                }
            ],
        },
        {
            label: '카테고리',
            name: 'food-style',
            tabUIType: 'checkbox',
            options: [
                {
                    name: '한식',
                    value: 'korean-food',
                    description: '밥과 찌개, 국 등 다양한 반찬을 곁들여 먹는 한국의 전통 음식',
                },
                {
                    name: '중식',
                    value: 'chinese-food',
                    description: '중화요리, 중국과 대만의 요리들을 의미',
                },
                {
                    name: '일식',
                    value: 'japanese-food',
                    description: '일본의 스타일은 기본으로한 요리',
                },
                {
                    name: '양식',
                    value: 'western-food',
                    description: '서양의 전통요리',
                },
            ],
        },
    ]
}

export async function getRestaurantLising() {
    return [
        {
            id: 'car-listing://1',
            title: '이타국시',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '대구지사에서 간편히 먹을 수 있는 맛집, 이타국시',
            featuredImage: itaguksi.src,
            galleryImgs: [],
            address: '대구 중구 남성로 50 이타국시',
            reviewStart: 5.0,
            reviewCount: 126,
            representative_menu: '한우 사골 국시, 이타왕돈까스, 쭈꾸미 비빔 칼국수',
            branch: '대구지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '두남자찜닭',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '동성로 찜닭 맛집, 토핑도 자유롭게 추가 가능',
            featuredImage: DunamjaJjimdak.src,
            galleryImgs: [],
            address: '대구 중구 동성로1길 25 2층',
            reviewStart: 4.6,
            reviewCount: 13,
            representative_menu: '찜닭',
            branch: '대구지사',
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
    ]
}