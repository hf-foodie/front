
import { HeadingWithSubProps } from '@/shared/Heading'
import clsx from 'clsx'
import { FC } from 'react'
import { TMagazine } from '@/data/magazines'
import SectionMagazineHeader from "@/components/SectionMagazine/SectionMagazineHeader";
import CardMain from "@/components/SectionMagazine/Card/CardMain";
import CardSub from "@/components/SectionMagazine/Card/CardSub";


interface Props extends Pick<HeadingWithSubProps, 'subHeading' | 'dimHeading'> {
  magazines: (TMagazine | undefined)[]
  heading?: string
  className?: string
  subHeading?: string
}

const SectionMagazine: FC<Props> = ({ magazines, heading, className, subHeading, dimHeading }) => {
    const magazinesMain = magazines[0]
    const magazinesSub = magazines.slice(1)

  return (
    <div className={clsx('section-magazine-1', className)}>
      <SectionMagazineHeader
        subHeading={subHeading}
        dimHeading={dimHeading}
        heading={heading}
      />
      {!magazines.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        {magazinesMain && <CardMain size="large" magazine={magazinesMain} />}
        <div className="grid gap-6 md:gap-8">
            {magazinesSub.map((magazine, index) => (
                // magazine이 유효한 데이터일 때만 Card를 렌더링하고,
                // undefined일 때는 빈 공간(또는 플레이스홀더)을 렌더링합니다.
                magazine ? (
                    <CardSub key={magazine.id} magazine={magazine} />
                ) : (
                    <div key={index} className="empty-spot-placeholder" /> // 예시
                )
            ))}
        </div>
      </div>
    </div>
  )
}

export default SectionMagazine
