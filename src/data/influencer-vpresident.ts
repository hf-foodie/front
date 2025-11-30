import vpresident_001 from "@/images/influencer/vpresident/가야정.png";
import vpresident_002 from "@/images/influencer/vpresident/마루카츠.png";
import vpresident_003 from "@/images/influencer/vpresident/통낙지.png";
import vpresident_004 from "@/images/influencer/vpresident/서울깍두기.png";
import vpresident_005 from "@/images/influencer/vpresident/봄베이브로이.png";
import vpresident_006 from "@/images/influencer/vpresident/애슐리퀸즈.png";
import vpresident_007 from "@/images/influencer/vpresident/주왕산삼계탕.png";
import vpresident_008 from "@/images/influencer/vpresident/808웨스트도어.png";
import vpresident_009 from "@/images/influencer/vpresident/한가정.png";
import vpresident_010 from "@/images/influencer/vpresident/외가집.png";
import vpresident_011 from "@/images/influencer/vpresident/숙향.png";
import vpresident_012 from "@/images/influencer/vpresident/한마당.png";
import vpresident_013 from "@/images/influencer/vpresident/서면칼국수.png";
import vpresident_014 from "@/images/influencer/vpresident/초원복국.png";
import vpresident_015 from "@/images/influencer/vpresident/고성수산횟집.png";
import vpresident_016 from "@/images/influencer/vpresident/조방제일한우.png";
import vpresident_017 from "@/images/influencer/vpresident/양산도.png";
import vpresident_018 from "@/images/influencer/vpresident/한성각.png";
import vpresident_019 from "@/images/influencer/vpresident/아임타이.png";
import vpresident_020 from "@/images/influencer/vpresident/미밥.png";
import vpresident_021 from "@/images/influencer/vpresident/그라치에.png";
import vpresident_022 from "@/images/influencer/vpresident/키친물고기.png";
import vpresident_023 from "@/images/influencer/vpresident/거대곰탕.png";
import vpresident_024 from "@/images/influencer/vpresident/딤타오.png";
import vpresident_025 from "@/images/influencer/vpresident/라무야.png";
import vpresident_027 from "@/images/influencer/vpresident/구덕포끝집고기.png";
import vpresident_028 from "@/images/influencer/vpresident/고단수.png";
import vpresident_029 from "@/images/influencer/vpresident/산성식육점.png";
import vpresident_030 from "@/images/influencer/vpresident/청기와타운.png";
import vpresident_031 from "@/images/influencer/vpresident/김형제고기의철학.png";
import vpresident_033 from "@/images/influencer/vpresident/양귀빈.png";
import vpresident_034 from "@/images/influencer/vpresident/동방명주.png";
import vpresident_035 from "@/images/influencer/vpresident/석화연.png";
import vpresident_036 from "@/images/influencer/vpresident/행복한횟집.png";
import vpresident_037 from "@/images/influencer/vpresident/해동.png";
import vpresident_038 from "@/images/influencer/vpresident/동화대반점.png";
import vpresident_039 from "@/images/influencer/vpresident/홍유단.png";
import vpresident_040 from "@/images/influencer/vpresident/냉수탕가든.png";
import vpresident_041 from "@/images/influencer/vpresident/화락만리.png";




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
            title: '가야정',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_001.src,
            address: '부산 남구 문현금융로 40',
            representative_menu: '고등어구이, 고등어조림',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '마루카츠',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_002.src,
            address: '부산 남구 문현금융로 40, 2층',
            representative_menu: '일본식 돈까스',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['일식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '통낙지',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_003.src,
            address: '부산 남구 문현금융로 40, 2층',
            representative_menu: '낚지볶음, 연포탕, 낙지전',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: true
        },
        {
            id: 'car-listing://1',
            title: '서울깍두기',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_004.src,
            address: '부산 남구 문현금융로 40, 2층',
            representative_menu: '설렁탕, 곰탕 등',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '봄베이브로이',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_005.src,
            address: '부산 남구 문현금융로 40, 2층',
            representative_menu: '카레, 난, 탄두리치킨',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['아시안식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '애슐리퀸즈',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_006.src,
            address: '부산 남구 전포대로91번길 47 이마트 문현점 3층',
            representative_menu: '뷔페',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '주왕산삼계탕',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_007.src,
            address: '부산 남구 전포대로91번길 47 이마트 문현점 3층',
            representative_menu: '전복삼계탕',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '808웨스트도어',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_008.src,
            address: '부산 남구 전포대로91번길 47 이마트 문현점 3층',
            representative_menu: '뷔페',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '한가정',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_009.src,
            address: '부산 부산진구 전포대로122번길 9',
            representative_menu: '뷔페',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '외가집',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_010.src,
            address: '부산 남구 전포대로92번길 3',
            representative_menu: '뷔페',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식'],
            recommendation: true
        },
        {
            id: 'car-listing://1',
            title: '숙향',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_011.src,
            address: '부산 부산진구 범일로192번길 10',
            representative_menu: '골동반, 골동면',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '한마당통영숯불장어구이',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_012.src,
            address: '부산 부산진구 범일로192번길 13',
            representative_menu: '장어구이, 장어탕',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '서면칼국수',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_013.src,
            address: '부산 부산진구 황령대로7번길 29',
            representative_menu: '칼국수, 김밥, 수육',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '초원복국 범일점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_014.src,
            address: '부산 부산진구 자유평화로 21-10',
            representative_menu: '점심특선 (복수육, 복튀김, 복무침, 복국)',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식'],
            recommendation: true
        },
        {
            id: 'car-listing://1',
            title: '고성회집',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_015.src,
            address: '부산 부산진구 범일로142번길 63',
            representative_menu: '회정식, 대구탕',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '조방제일한우',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_016.src,
            address: '부산 동구 조방로42번길 12',
            representative_menu: '점심특선 (불고기, 비빔냉면, 된장찌개)',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '양산도',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_017.src,
            address: '부산 부산진구 동천로 58',
            representative_menu: '히츠마부시',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['일식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '한성각',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_018.src,
            address: '부산 부산진구 동천로 32 1~3층',
            representative_menu: '짜장면, 유린기, 탕수육',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['중식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '아임타이',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_019.src,
            address: '부산 부산진구 서전로38번길 78 1층 아임타이',
            representative_menu: '쌀국수, 팟타이',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['아시안식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '행복한밥상美밥',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_020.src,
            address: '부산 부산진구 중앙대로680번길 49',
            representative_menu: '돼지두루치기, 보쌈정식',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '그라치에',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_021.src,
            address: '부산 부산진구 동천로24번길 4',
            representative_menu: '감자뇨끼, 통오징어먹물리조또',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '키친물고기',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_022.src,
            address: '부산 부산진구 동천로24번길 18-3',
            representative_menu: '스페샬초밥 10p, 돈가츠카레덮밥',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['일식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '거대곰탕 서면삼정타워점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_023.src,
            address: '부산 부산진구 중앙대로 672',
            representative_menu: '진한사골곰탕, 평양냉면',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '딤타오 삼정타워점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_024.src,
            address: '부산 부산진구 중앙대로 672',
            representative_menu: '부추새우교자, 가지튀김',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['중식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '라무야',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_025.src,
            address: '부산 남구 전포대로91번길 17',
            representative_menu: '특양갈비, 땡초라면',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['아시안식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '구덕포끝집고기 서면전포점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_027.src,
            address: '부산 부산진구 전포대로176번길 19',
            representative_menu: '삼겹살, 목살',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '고단수 부산전포점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_028.src,
            address: '부산 부산진구 동성로49번길 32',
            representative_menu: '삼겹살, 목살, 항정살',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '산성식육점 전포직영점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_029.src,
            address: '부산 부산진구 전포대로210번길 19',
            representative_menu: '삼겹살, 누룩목살',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '청기와타운 서면점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_030.src,
            address: '부산 부산진구 중앙대로691번길 46',
            representative_menu: '생갈비, 서울왕갈비',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '김형제고기의철학 부산서면점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_031.src,
            address: '부산 부산진구 서면로 37',
            representative_menu: '소금구이 숙성 생목살, 통삼겹살',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '양귀빈식당 수영점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_033.src,
            address: '부산 수영구 수영로646번길 15 1층',
            representative_menu: '양갈비, 꽃갈비살',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['중식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '동방명주',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_034.src,
            address: '부산 수영구 남천바다로 31',
            representative_menu: '짬뽕, 군만두',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['중식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '석화연 부산 광안 본점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_035.src,
            address: '부산 수영구 광안해변로 199 201호',
            representative_menu: '뼈목살, 삼겹살',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '행복한횟집',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_036.src,
            address: '부산 수영구 민락수변로 29',
            representative_menu: '회코스(A,B,C)',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '해동',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_037.src,
            address: '부산 수영구 민락수변로 105 바다산책프라자',
            representative_menu: '회코스요리',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '동화대반점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_038.src,
            address: '부산 수영구 수영로427번길 11 2층',
            representative_menu: '삼선짜장, 삼선짬뽕',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['중식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '홍유단 광안점',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_039.src,
            address: '부산 수영구 민락수변로 29 바다마루 2층 204호, 205호',
            representative_menu: '중국코스요리, 중화오리냉채',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['중식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '냉수탕가든',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_040.src,
            address: '부산 부산진구 가야공원로 107',
            representative_menu: '오리불고기, 오리백숙',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식'],
            recommendation: false
        },
        {
            id: 'car-listing://1',
            title: '화락만리',
            handle: 'peugeot-108',
            listingCategory: 'vpresident',
            featuredImage: vpresident_041.src,
            address: '부산 부산진구 서면로 10 2층',
            representative_menu: '화락짜장, 화락짬뽕',
            branch: '본사',
            reviewStart: 5,
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['중식'],
            recommendation: false
        }
    ]
}

