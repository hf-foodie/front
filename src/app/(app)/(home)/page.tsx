import {Metadata} from 'next'
import SectionAdvertisement from "@/components/SectionAdvertisement/SectionAdvertisement";
import SectionMagazine from "@/components/SectionMagazine/SectionMagazine";
import {getMagazineById, TMagazine} from "@/data/magazines";
import BackgroundSection from "@/components/BackgroundSection";
import SectionSliderBranches from "@/components/SectionSliderBranches/SectionSliderBranches";
import {getBranches} from "@/data/branches";
import becomeAuthorImg from '@/images/BecomeAnAuthorImg.png'
import SectionBecomeAnFoodie from "@/components/SectionFoodie/SectionBecomeAnFoodie";
import SectionMagazineTour from "@/components/SectionMagazineTour/SectionMagazineTour";
import {getTouristAttraction} from "@/data/TouristAttraction";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page of the application showcasing various sections and posts.',
}

async function initMagazines(){
    /**
     * SectionMagazine에 배치할 데이터
     * 0번째는 메인, 1번째는 오른쪽 상단, 2번째는 오른쪽 중단, 3번째는 오른쪽 하단
     */
    const magazineIds = ['M00001', 'M00002', 'M00003', 'M00004'];
    const magazinePromises = magazineIds.map(id => getMagazineById(id));
    const magazines: (TMagazine | undefined)[] = await Promise.all(magazinePromises);

    return magazines
}

const Page = async () => {
    const magazines = await initMagazines();
    const branches = await getBranches()
    const touristAttractions = await getTouristAttraction();

    return (
        <div className="relative">
            <SectionAdvertisement />

            <div className="relative container space-y-28 pb-16 lg:space-y-32 lg:pb-32">
                <SectionMagazine
                    className="pt-16 lg:pt-20"
                    heading="HF 매거진"
                    subHeading="맛집원정대가 이달의 맛집을 추천해드려요"
                    magazines={magazines}
                />

                <div className="relative py-16 lg:py-20">
                    <BackgroundSection />
                    <SectionSliderBranches
                        heading="지역별 맛집"
                        subHeading="본사 및 지사 인근에 위치한 지역별 맛집을 찾아보세요"
                        branches={branches}
                    />
                </div>

                <SectionMagazineTour
                    touristAttractions={touristAttractions}
                    heading="어디로 놀러갈까요?"
                    dimHeading="친구와 연인과 가족과 함께 가보면 좋은 관광명소 소개"
                />

                <SectionBecomeAnFoodie rightImg={becomeAuthorImg} />
            </div>
        </div>
    )
}

export default Page
