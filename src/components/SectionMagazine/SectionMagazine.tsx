
import { HeadingWithSubProps } from '@/shared/Heading'
import clsx from 'clsx'
import { FC } from 'react'
import { TMagazine } from '@/data/magazines'
import SectionMagazineHeader from "@/components/SectionMagazine/SectionMagazineHeader";
import CardMain from "@/components/SectionMagazine/Card/CardMain";
import CardSub from "@/components/SectionMagazine/Card/CardSub";

interface Props extends Pick<HeadingWithSubProps, 'subHeading' | 'dimHeading'> {
  magazines: TMagazine[]
  heading?: string
  className?: string
  subHeading?: string
}

const SectionMagazine: FC<Props> = ({ magazines, heading, className, subHeading, dimHeading }) => {
  return (
    <div className={clsx('section-magazine-1', className)}>
      <SectionMagazineHeader
        subHeading={subHeading}
        dimHeading={dimHeading}
        heading={heading}
      />
      {!magazines.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        {magazines[0] && <CardMain size="large" magazine={magazines[0]} />}
        <div className="grid gap-6 md:gap-8">
          {magazines
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <CardSub key={index} magazine={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default SectionMagazine
