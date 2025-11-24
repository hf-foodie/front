
import { HeadingWithSubProps } from '@/shared/Heading'
import clsx from 'clsx'
import { FC } from 'react'
import SectionMagazineHeader from '@/components/SectionMagazineHeader'
import CardMagazineMain from '@/components/Magazine/CardMagazineMain'
import CardMagazineSub from '@/components/Magazine/CardMagazineSub'
import { TMagazine } from '@/data/magazines'

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
        {magazines[0] && <CardMagazineMain size="large" magazine={magazines[0]} />}
        <div className="grid gap-6 md:gap-8">
          {magazines
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <CardMagazineSub key={index} magazine={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default SectionMagazine
