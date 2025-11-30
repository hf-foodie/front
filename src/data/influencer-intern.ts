import intern_001 from "@/images/influencer/intern/이타국시.png";
import intern_002 from "@/images/influencer/intern/두남자찜닭.png";
import intern_003 from "@/images/influencer/intern/소선샤브.png";
import intern_004 from "@/images/influencer/intern/츠루멘.png";
import intern_005 from "@/images/influencer/intern/삼화만두.png";
import intern_006 from "@/images/influencer/intern/백계옥.png";
import intern_007 from "@/images/influencer/intern/온의칼국수.png";
import intern_008 from "@/images/influencer/intern/멍석갈비.png";
import intern_009 from "@/images/influencer/intern/남춘천맛집.png";
import intern_010 from "@/images/influencer/intern/짬뽕전문점.png";
import intern_011 from "@/images/influencer/intern/랑우.png";
import intern_012 from "@/images/influencer/intern/신당동즉석떡볶이.png";
import intern_013 from "@/images/influencer/intern/차돌짬뽕.png";
import intern_014 from "@/images/influencer/intern/옛날그맛명동칼국수.png";
import intern_015 from "@/images/influencer/intern/아메리칸포하우스.png";
import intern_016 from "@/images/influencer/intern/하마아구찜.png";
import intern_017 from "@/images/influencer/intern/부부더상록.png";
import intern_018 from "@/images/influencer/intern/보울레시피.png";
import intern_019 from "@/images/influencer/intern/해남집.png";
import intern_020 from "@/images/influencer/intern/산다화.png";

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
            featuredImage: intern_001.src,
            address: '대구 중구 남성로 50 이타국시',
            reviewStart: 5,
            representative_menu: '한우 사골 국시, 이타왕돈까스, 쭈꾸미 비빔 칼국수',
            branch: ['대구지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '두남자찜닭',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '동성로 찜닭 맛집, 토핑도 자유롭게 추가 가능',
            featuredImage: intern_002.src,
            address: '대구 중구 동성로1길 25 2층',
            reviewStart: 5,
            representative_menu: '찜닭',
            branch: ['대구지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '소션샤브',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '1인 샤브샤브, 내가 먹고싶은 토핑을 마음껏 ~',
            reviewStart: 5,
            featuredImage: intern_003.src,
            address: '대구 중구 남성로 53 1층',
            representative_menu: '각종 샤브샤브',
            branch: ['대구지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '츠루멘',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '찐 일식술집~, 술안주 뿐만 아니라 라멘도 엄청 맛있는곳',
            reviewStart: 5,
            featuredImage: intern_004.src,
            address: '대구 중구 달구벌대로 2109-23',
            representative_menu: '불대창지로라멘, 돈코츠라멘',
            branch: ['대구지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'car-listing://1',
            title: '삼화만두',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '대구 3대 만두, 동성로 맛집 쯔양도 다녀간 곳',
            reviewStart: 5,
            featuredImage: intern_005.src,
            address: '대구 중구 남성로 58-1',
            representative_menu: '삼화우동, 쫄면콤비',
            branch: ['대구지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '백계옥',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '닭칼국수로 여름을 견디는 방법, 춘천 현지인 맛집',
            reviewStart: 5,
            featuredImage: intern_006.src,
            address: '강원 춘천시 영서로2279번길 19 1층',
            representative_menu: '닭곰탐, 닭칼국수',
            branch: ['강원서부지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '온의칼국수',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '닭칼국수로 여름을 견디는 방법, 춘천 현지인 맛집',
            reviewStart: 5,
            featuredImage: intern_007.src,
            address: '강원 춘천시 춘천로17번길 21 116호',
            representative_menu: '칼국수',
            branch: ['강원서부지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '멍석갈비',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '밑반찬 까지 싹다맛있는 맛있는 삼겹살집',
            reviewStart: 5,
            featuredImage: intern_008.src,
            address: '강원 춘천시 춘천로17번길 21 116호',
            representative_menu: '허브김치삼겹살',
            branch: ['강원서부지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '남춘천맛집',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '닭칼국수로 여름을 견디는 방법, 춘천 현지인 맛집',
            featuredImage: intern_009.src,
            address: '강원 춘천시 춘천로17번길 21 116호',
            reviewStart: 5,
            representative_menu: '꽁치김치찌개',
            branch: ['강원서부지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '짬뽕전문점',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '불맛 제대로 나는 짬뽕전문점',
            featuredImage: intern_010.src,
            address: '강원 춘천시 영서로2269번길 3',
            reviewStart: 5,
            representative_menu: '차돌짬뽕, 탕수육',
            branch: ['강원서부지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['중식']
        },
        {
            id: 'car-listing://1',
            title: '랑우',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '보양 소고기 쌀국수부터 마라쌀국수까지',
            featuredImage: intern_011.src,
            address: '서울 중구 후암로 98 엘지서울역빌딩 지하1층 랑우',
            reviewStart: 5,
            representative_menu: '보양 소고기 쌀국수, 칠리새우 반쎄오',
            branch: ['서울중부지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['아시안식']
        },
        {
            id: 'car-listing://1',
            title: '신당동즉석떡볶이',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '옛스러운 아담한 즉석떡볶이집, 떡볶이와 볶음밥 굿굿굿',
            featuredImage: intern_012.src,
            address: '서울 용산구 후암로57길 3-9 1층',
            reviewStart: 5,
            representative_menu: '즉석떡볶이',
            branch: ['서울중부지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '차돌짬뽕',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '적당히 매우면서 짬뽕치곤 깔끔함이 느껴지는 짬뽕',
            featuredImage: intern_013.src,
            address: '서울 용산구 후암로 79',
            reviewStart: 5,
            representative_menu: '차돌짬뽕, 탕수육',
            branch: ['서울중부지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['중식']
        },
        {
            id: 'car-listing://1',
            title: '옛날그맛명동칼국수',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '칼국수랑 보쌈이 진짜 맛있어요, 보쌈칼국수정식 추천',
            featuredImage: intern_014.src,
            address: '서울 용산구 후암로57길 3-2 2층',
            reviewStart: 5,
            representative_menu: '명동칼국수, 보쌈칼국수정식',
            branch: ['서울중부지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '아메리칸 포 하우스',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '서울역에 위치한 미국식 쌀국수',
            featuredImage: intern_015.src,
            address: '서울 중구 만리재로35길 5 1층',
            reviewStart: 5,
            representative_menu: '아포 양지쌀국수, 아포 분짜, 새우볶음밥, 반미',
            branch: ['서울중부지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['아시안식']
        },
        {
            id: 'car-listing://1',
            title: '하마아구찜',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '아구 살이 가득한 존맛탱 아구찜 맛집',
            featuredImage: intern_016.src,
            address: '광주 서구 상무시민로 131 1층',
            reviewStart: 5,
            representative_menu: '아구찜, 누룽치즈볶음밥, 묵사발',
            branch: ['광주지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '부부더상록',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '디저트가 먹고싶을 땐? 광주 케이크 맛집으로',
            featuredImage: intern_017.src,
            address: '광주 서구 상무중앙로78번길 5-6 102호',
            reviewStart: 5,
            representative_menu: '부부라떼, 각종 케이크',
            branch: ['광주지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'car-listing://1',
            title: '보울레시피',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '다이어트 하고싶은 날엔? 건강한 한끼 딱좋은 곳',
            featuredImage: intern_018.src,
            address: '광주 서구 상무중앙로 70 1층 보울레시피',
            reviewStart: 5,
            representative_menu: '연어스테이크X명란포케, 나만의 레시피',
            branch: ['광주지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'car-listing://1',
            title: '해남집',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '제육볶음맛집',
            featuredImage: intern_019.src,
            address: '광주 서구 상무연하로 62 1층',
            reviewStart: 5,
            representative_menu: '제육볶음+찌개+공기밥 세트',
            branch: ['광주지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'car-listing://1',
            title: '산다화',
            handle: 'peugeot-108',
            listingCategory: 'intern',
            description: '철판양념삼겹이 진짜 맛있는 맛집',
            featuredImage: intern_020.src,
            address: '광주 서구 상무시민로 131 1층',
            reviewStart: 5,
            representative_menu: '철판양념삼겹, 제육쌈밥',
            branch: ['광주지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
    ]
}