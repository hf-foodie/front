import cc_01 from "@/images/influencer/cc/01.png";
import cc_02 from "@/images/influencer/cc/02.png";
import cc_03 from "@/images/influencer/cc/03.png";
import cc_04 from "@/images/influencer/cc/04.png";
import cc_05 from "@/images/influencer/cc/05.png";
import cc_06 from "@/images/influencer/cc/06.png";
import cc_07 from "@/images/influencer/cc/07.png";
import cc_08 from "@/images/influencer/cc/08.png";
import cc_09 from "@/images/influencer/cc/09.png";
import cc_10 from "@/images/influencer/cc/10.png";
import cc_11 from "@/images/influencer/cc/11.png";
import cc_12 from "@/images/influencer/cc/12.png";
import cc_13 from "@/images/influencer/cc/13.png";
import cc_14 from "@/images/influencer/cc/14.png";
import cc_15 from "@/images/influencer/cc/15.png";
import cc_16 from "@/images/influencer/cc/16.png";
import cc_17 from "@/images/influencer/cc/17.png";
import cc_18 from "@/images/influencer/cc/18.png";
import cc_19 from "@/images/influencer/cc/19.png";
import cc_20 from "@/images/influencer/cc/20.png";
import cc_21 from "@/images/influencer/cc/21.png";
import cc_22 from "@/images/influencer/cc/22.png";
import cc_23 from "@/images/influencer/cc/23.png";
import cc_24 from "@/images/influencer/cc/24.png";
import cc_25 from "@/images/influencer/cc/25.png";
import cc_26 from "@/images/influencer/cc/26.png";
import cc_27 from "@/images/influencer/cc/27.png";
import cc_28 from "@/images/influencer/cc/28.png";
import cc_29 from "@/images/influencer/cc/29.png";
import cc_30 from "@/images/influencer/cc/30.png";

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
            id: 'ceo-listing-025',
            title: '그집곰도리탕 서면점',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_01.src,
            address: '부산 부산진구 동천로107번길 17 1층',
            reviewStart: 4.4,
            representative_menu: '곱도리탕, 닭도리탕',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '초필살돼지구이 광안직영점',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_02.src,
            address: '부산 수영구 광남로108번길 9 1층',
            reviewStart: 4.4,
            representative_menu: '필살껍데기, 소금오겹살',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '술곳간',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_03.src,
            address: '부산 수영구 무학로21번길 98 1층',
            reviewStart: 4.4,
            representative_menu: '명란감자전, 가지만두',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '녹우촌(창원)',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_04.src,
            address: '경남 창원시 성산구 중앙대로 111',
            reviewStart: 4.4,
            representative_menu: '김치찌개',
            branch: ['경남지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '샤브남바완 남포직영점',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_05.src,
            address: '부산 중구 광복중앙로 32-1 1층, 2층',
            reviewStart: 4.4,
            representative_menu: '돼지고기 샤브 정식',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-025',
            title: '선어마을',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_06.src,
            address: '부산 서구 구덕로114번길 17',
            reviewStart: 4.4,
            representative_menu: '선어 모듬회,맑은탕',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '용광횟집',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_07.src,
            address: '부산 중구 보수대로106번길 35',
            reviewStart: 4.4,
            representative_menu: '생선회, 아나고조림',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '덴',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_08.src,
            address: '부산 수영구 광안로 51-4',
            reviewStart: 4.4,
            representative_menu: '2인 사시미, 고등어봉초밥',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-025',
            title: '낭만장작 광안점',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_09.src,
            address: '부산 수영구 무학로10번길 47 1층',
            reviewStart: 4.4,
            representative_menu: '누룽지 통닭 장작구이,누룽지 화산통닭',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '동해물회',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_10.src,
            address: '부산 부산진구 서전로 15 2층',
            reviewStart: 4.4,
            representative_menu: '잡어물회, 한치물회',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '부센동 광안리본점',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_11.src,
            address: '부산 수영구 수영로588번길 7 108호',
            reviewStart: 4.4,
            representative_menu: '산더미 시그니처 부센동,오색 타다키동',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-025',
            title: '삼정타워 Q라운지',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_12.src,
            address: '부산 부산진구 중앙대로 672 삼정타워 8층',
            reviewStart: 4.4,
            representative_menu: '시그니처 라떼,시그니처 하이볼',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '우리돈가스',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_13.src,
            address: '부산 수영구 장대골로7번길 27 금성빌라 1층',
            reviewStart: 4.4,
            representative_menu: '경양식돈가스, 매운돈가스',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '우성삼계탕',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_14.src,
            address: '부산 수영구 광서로10번길 68',
            reviewStart: 4.4,
            representative_menu: '삼계탕',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '수안커피컴퍼니 커피하우스',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_15.src,
            address: '부산 동래구 충렬대로256번길 32',
            reviewStart: 4.4,
            representative_menu: '고메 플레이트, 핸드 드립, 사이펀',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '세븐아일랜드',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_16.src,
            address: '부산 강서구 가덕해안로 560',
            reviewStart: 4.4,
            representative_menu: '콘파냐, 블랙라떼',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '엘로우',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_17.src,
            address: '경북 경주시 경감로 375-16',
            reviewStart: 4.4,
            representative_menu: '슬로우커피, 바나나푸딩',
            branch: ['HF미래인재원'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '리오네',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_18.src,
            address: '부산 수영구 구락로 36',
            reviewStart: 4.4,
            representative_menu: '성게알어란파스타, 알감자뇨끼',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '동백키친',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_19.src,
            address: '제주 제주시 한림읍 수원7길 42 1층',
            reviewStart: 4.4,
            representative_menu: '뼈등심 돈가스, 전복 고사리 파스타',
            branch: ['제주지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '사비아',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_20.src,
            address: '부산 해운대구 달맞이길117번라길 70 1층',
            reviewStart: 4.4,
            representative_menu: '감자뇨끼, 백명란 통영 굴 오일파스타',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '야키토리백탄 광안리',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_21.src,
            address: '부산 수영구 민락로13번길 21 2층',
            reviewStart: 4.4,
            representative_menu: '야키토리,백/탄코스',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-025',
            title: '시라가',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_22.src,
            address: '부산 연제구 반송로 22 115호',
            reviewStart: 4.4,
            representative_menu: '모듬사시미, 사케',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-025',
            title: '소수인',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_23.src,
            address: '부산 부산진구 가야대로750번길 17 1층',
            reviewStart: 4.4,
            representative_menu: '모찌리도후,가지덴가쿠',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-025',
            title: '샘라이언스',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_24.src,
            address: '부산 해운대구 해운대해변로298번길 24 팔레드시즈',
            reviewStart: 4.4,
            representative_menu: '코젤 다크,레드락,샘s버거',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '3found',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_25.src,
            address: '부산 부산진구 전포대로189번길 30 103호',
            reviewStart: 4.4,
            representative_menu: '채끝 훈연 스테이크, 관자오일파스타',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '석정갈비',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_26.src,
            address: '부산 동래구 중앙대로1367번길 72',
            reviewStart: 4.4,
            representative_menu: '수제생갈비, 수제양념갈비',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-025',
            title: '귀화식당 동래 온천장점',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_27.src,
            address: '부산 동래구 중앙대로1367번길 18 1층',
            reviewStart: 4.4,
            representative_menu: '사시미,명물오무라이스',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-025',
            title: '카페 만디',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_28.src,
            address: '부산 사하구 오작로 104-7 1, 2층',
            reviewStart: 4.4,
            representative_menu: '만디라떼,딸기슈페너',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '더블린데이',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_29.src,
            address: '부산 부산진구 서면로 29',
            reviewStart: 4.4,
            representative_menu: '기네스,포테이토피자',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '로바타 탄요',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            featuredImage: cc_30.src,
            address: '부산 동래구 명륜로139번길 44-14 1층',
            reviewStart: 4.4,
            representative_menu: '토종닭구이, 채끝 스테이크',
            branch: ['본사', '부산지사', '서부산지사'],
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['양식']
        }
    ]
}