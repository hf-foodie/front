import SectionHero from '@/components/SectionHero'
import rightImg from '@/images/about/hero.png'
import { Button } from '@/shared/Button'
import Input from '@/shared/Input'
import { Divider } from '@/shared/divider'
import SectionFounder from './SectionFounder'
import SectionStatistic from './SectionStatistic'

const PageAbout = ({}) => {
  return (
    <div className={`nc-PageAbout relative`}>
      <div className="relative container space-y-16 py-16 lg:space-y-28 lg:py-28">
        <SectionHero
          rightImg={rightImg}
          heading="오늘뭐먹지?"
          btnText=""
          subHeading="주택금융공사 임직원이 추천하는 맛집 소개, 오늘의 스트레스를 맛있는 음식을 생각하면서 떨쳐버리세요"
        />
        <Divider />
        <SectionFounder />

      </div>
    </div>
  )
}

export default PageAbout
