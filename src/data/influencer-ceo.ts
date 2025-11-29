import ceo_001 from "@/images/influencer/ceo/한가정.png";
import ceo_002 from "@/images/influencer/ceo/동화고옥.png";
import ceo_003 from "@/images/influencer/ceo/미조리초밥.png";
import ceo_004 from "@/images/influencer/ceo/연안식당.png";
import ceo_005 from "@/images/influencer/ceo/삿뽀로.png";
import ceo_006 from "@/images/influencer/ceo/경복궁.png";
import ceo_007 from "@/images/influencer/ceo/향토정.png";
import ceo_008 from "@/images/influencer/ceo/섬진강.png";
import ceo_009 from "@/images/influencer/ceo/호남각.png";
import ceo_010 from "@/images/influencer/ceo/진라이.png";
import ceo_011 from "@/images/influencer/ceo/긴자.png";
import ceo_012 from "@/images/influencer/ceo/청해어가.png";
import ceo_013 from "@/images/influencer/ceo/전복촌.png";
import ceo_014 from "@/images/influencer/ceo/곰배령.png";
import ceo_015 from "@/images/influencer/ceo/서당골산채.png";
import ceo_016 from "@/images/influencer/ceo/남도본가.png";
import ceo_017 from "@/images/influencer/ceo/어우늘.png";
import ceo_018 from "@/images/influencer/ceo/해초섬.png";
import ceo_019 from "@/images/influencer/ceo/아사카.png";
import ceo_020 from "@/images/influencer/ceo/미스터피자.png";
import ceo_021 from "@/images/influencer/ceo/bhc.png";
import ceo_022 from "@/images/influencer/ceo/산.png";
import ceo_023 from "@/images/influencer/ceo/rockpool.png";
import ceo_024 from "@/images/influencer/ceo/우리동네화덕피자브루노.png";
import ceo_025 from "@/images/influencer/ceo/해동횟집.png";

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
            id: 'ceo-listing-001',
            title: '한가정',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '한국식 정을 제대로 느낄 수 있는 집',
            featuredImage: ceo_001.src,
            address: '부산 부산진구 전포대로122번길 9',
            reviewStart: 4.6,
            representative_menu: '이모카세, 생선구이 정식',
            branch: '본사',
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-002',
            title: '동화고옥',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '따뜻한 밥상의 표준, 서울역 한정식 맛집',
            featuredImage: ceo_002.src,
            address: '서울 중구 한강대로 416 지하1층 24-1호',
            reviewStart: 4.2,
            representative_menu: '언양식 한우불고기, 동화 골동면, 갈비코스',
            branch: '서울중부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-003',
            title: '미조리초밥',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '고급스러운 분위기의 일식 전문점으로, 신선한 회와 다양한 해산물 요리가 인기',
            featuredImage: ceo_003.src,
            address: '부산 사상구 광장로 60',
            reviewStart: 4.4,
            representative_menu: '코스 요리',
            branch: '서부산지사',
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-004',
            title: '연안식당',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '다양한 해산물 요리가 가득한 연안식당, 특히 꼬막 맛집!',
            featuredImage: ceo_004.src,
            address: '충남 아산시 배방읍 광장로 210 202동 에이 217,218,219호',
            reviewStart: 4.4,
            representative_menu: '꼬막비빔밥, 꼬막 무침',
            branch: '충남지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-005',
            title: '삿뽀로',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '품격있는 일식집, 모임, 상견례 등 모두가 만족할 수 있는 일식 코스',
            featuredImage: ceo_005.src,
            address: '경남 창원시 성산구 중앙대로100번길 9 202(상남동)',
            reviewStart: 4.4,
            representative_menu: '모둠 정식',
            branch: '경남지사',
            timeZoneCategory: ['점심', '저녁'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-006',
            title: '경복궁',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '일산 상견례 장소로 1등, 정갈한 한정식 경복궁',
            featuredImage: ceo_006.src,
            address: '경기 고양시 일산동구 중앙로 1053',
            reviewStart: 4.1,
            representative_menu: '모둠 정식',
            branch: '경기북부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-007',
            title: '향토정',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '순천 택시기사들이 인정한 찐 로컬 맛집',
            featuredImage: ceo_007.src,
            address: '전남 순천시 남신월4길 13-26',
            reviewStart: 4.1,
            representative_menu: '순천길 남도정식, 계절정식',
            branch: '전남지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-008',
            title: '섬진강',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴비정식, 생선구이정식, 갈치조림정식 등 다양한 한정식 메뉴를 제공하는 광주 상무지구의 맛집',
            featuredImage: ceo_008.src,
            address: '광주 서구 신촌길 20 1층',
            reviewStart: 4.1,
            representative_menu: '보리굴비정식, 생선구이정식, 갈치구이정식',
            branch: '광주지사',
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-009',
            title: '주식회사 호남각',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴비정식, 생선구이정식, 갈치조림정식 등 다양한 한정식 메뉴를 제공하는 광주 상무지구의 맛집',
            featuredImage: ceo_009.src,
            address: '전북 전주시 덕진구 시천로 65 호남각',
            reviewStart: 4.1,
            representative_menu: '전주 비빔밥, 전주 떡갈비 정식',
            branch: '전북지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-010',
            title: '진라이',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_010.src,
            address: '경기 안양시 동안구 관평로 186 3층',
            reviewStart: 4.4,
            representative_menu: '점식 정식, 짜장, 탕수육',
            branch: '경기중부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['중식']
        },
        {
            id: 'ceo-listing-010',
            title: '진라이',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_010.src,
            address: '경기 안양시 동안구 관평로 186 3층',
            reviewStart: 4.4,
            representative_menu: '점식 정식, 짜장, 탕수육',
            branch: '경기중부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['중식']
        },
        {
            id: 'ceo-listing-011',
            title: '긴자',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_011.src,
            address: '경기 성남시 분당구 새마을로 75',
            reviewStart: 4.5,
            representative_menu: '정식 코스',
            branch: '충북지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-012',
            title: '청해어가',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_012.src,
            address: '대전 서구 문정로 40',
            reviewStart: 4.7,
            representative_menu: '점식 정식',
            branch: '대전지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-013',
            title: '전복촌',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_013.src,
            address: '인천 남동구 예술로204번길 35 해인빌딩 1층',
            reviewStart: 4.4,
            representative_menu: '장수정식',
            branch: '인천남부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-014',
            title: '곰배령',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_014.src,
            address: '강원 춘천시 춘천로 19',
            reviewStart: 4.4,
            representative_menu: '강원나물밥정식, 곰배령 특정식',
            branch: '강원서부지사',
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-015',
            title: '서당골산채',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_015.src,
            address: '강원 강릉시 임영로164번길 3',
            reviewStart: 4.4,
            representative_menu: '보리굴비정식, 황태구이, 더덕구이',
            branch: '강원동부지사',
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-016',
            title: '남도본가',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_016.src,
            address: '경기 수원시 팔달구 권광로196번길 12 1층',
            reviewStart: 4.7,
            representative_menu: '떡갈비정식, 보리굴비회정식',
            branch: '경기남부지사',
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-017',
            title: '어우늘',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_017.src,
            address: '제주 제주시 연북로 222',
            reviewStart: 4.2,
            representative_menu: '전복돌솥밥, 돌솥구이정식, 전복구이',
            branch: '제주지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-018',
            title: '해초섬',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_018.src,
            address: '서울 중구 한강대로 416 서울스퀘어 1층 8호',
            reviewStart: 3.9,
            representative_menu: '보리굴비정식, 세꼬시정식, 사시미정식',
            branch: '서울중부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-019',
            title: '아사카',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_019.src,
            address: '서울 서초구 강남대로 359 대우도씨에빛2',
            reviewStart: 4.1,
            representative_menu: '광어사시미, 히라메고노와다, 연어사시미',
            branch: '서울남부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['일식']
        },
        {
            id: 'ceo-listing-020',
            title: '미스터피자',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_020.src,
            address: '경상북도 안동시 옥동 773-5 1층 미스터피자',
            reviewStart: 3.6,
            representative_menu: '피자, 파스타 등',
            branch: '경북지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-021',
            title: 'BHC',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_021.src,
            address: '경북 안동시 복주길 51 1층 101호',
            reviewStart: 3.5,
            representative_menu: '뿌링클, 맛초킹 등',
            branch: '경북지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-022',
            title: '산',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_022.src,
            address: '대구 중구 남성로 53-1 산 한정식',
            reviewStart: 3.5,
            representative_menu: '젊음이 넘치는 산, 짝을 찾는 산 등 정식',
            branch: '대구지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['한식']
        },
        {
            id: 'ceo-listing-023',
            title: 'ROCK POOL',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_023.src,
            address: '경기 용인시 기흥구 기흥로 58-1 A동 B112호 락풀',
            reviewStart: 4.4,
            representative_menu: '에그인헬, 하프피자, 화덕피자',
            branch: '경기동부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-024',
            title: '우리동네화덕피자브루노',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_024.src,
            address: '서울 강서구 마곡동로10길 46 보타닉파크프라자 1층 111호',
            reviewStart: 4.4,
            representative_menu: '마르게리따, 디아볼라, 고르곤졸라, 페페로니',
            branch: '서울서부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-024',
            title: '우리동네화덕피자브루노',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_024.src,
            address: '경기 용인시 기흥구 기흥로 58-1 A동 B112호 락풀',
            reviewStart: 4.4,
            representative_menu: '에그인헬, 하프피자, 화덕피자',
            branch: '서울서부지사',
            timeZoneCategory: ['점심'],
            foodStyleCategory: ['양식']
        },
        {
            id: 'ceo-listing-025',
            title: '해동',
            handle: 'peugeot-108',
            listingCategory: 'ceo',
            description: '섬진강은 보리굴',
            featuredImage: ceo_025.src,
            address: '부산 수영구 민락수변로 105 바다산책프라자',
            reviewStart: 4.4,
            representative_menu: '코스요리',
            branch: '본사',
            timeZoneCategory: ['저녁'],
            foodStyleCategory: ['일식']
        },
    ]
}