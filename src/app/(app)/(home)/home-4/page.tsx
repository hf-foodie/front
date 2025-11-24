import BackgroundSection from '@/components/BackgroundSection'
import SectionAds from '@/components/SectionAds'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import SectionGridPosts from '@/components/SectionGridPosts'
import SectionHero2 from '@/components/SectionHero2'
import SectionMagazine6 from '@/components/SectionMagazine6'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAuthors'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionTrending from '@/components/SectionTrending'
import SectionVideos from '@/components/SectionVideos'
import { getAuthors } from '@/data/authors'
import { getAllPosts, getPostsGallery, getPostsVideo } from '@/data/posts'
import becomAuthorImg from '@/images/BecomeAnAuthorImg.png'
import { Metadata } from 'next'
import { getBranches } from '@/data/branches'
import SectionSliderBranches from '@/components/SectionBranches/SectionSliderBranches'
import SectionMagazine from '@/components/SectionMagazine'
import { getMagazines } from '@/data/magazines'
import SectionMagazineTour from '@/components/MagazineTour/SectionMagazineTour'
import SectionAdvertisement from '@/components/SectionAdvertisement/SectionAdvertisement'
import SectionBecomeAnFoodie from '@/components/SectionFoodie/SectionBecomeAnFoodie'
import { getTouristAttraction } from '@/data/TouristAttraction'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the application showcasing various sections and posts.',
}

const Page = async () => {
  const posts = await getAllPosts()
  const videoPosts = await getPostsVideo()
  const authors = await getAuthors()
  const touristAttractions = await getTouristAttraction();
  const magazines = await getMagazines();
  const branches = await getBranches()

  return (
    <div className="relative">
      <SectionAdvertisement />

      <div className="relative container space-y-28 pb-16 lg:space-y-32 lg:pb-32">

        <SectionMagazine
          className="pt-16 lg:pt-20"
          heading="HF 매거진"
          subHeading="맛집원정대가 이달의 맛집을 추천해드려요"
          magazines={magazines.slice(0, 4)}
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

        <SectionBecomeAnFoodie rightImg={becomAuthorImg} />
      </div>
    </div>
  )
}

export default Page
