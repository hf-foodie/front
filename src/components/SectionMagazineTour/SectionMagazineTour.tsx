import clsx from 'clsx'
import { FC } from 'react'
import { TTouristAttraction } from '@/data/TouristAttraction'
import CardMagazineTour from "./CardMegazineTour"
import HeadingWithSub, {HeadingWithSubProps} from "./HeadingMagazineTour"


type Props = Pick<HeadingWithSubProps, 'subHeading' | 'dimHeading'> & {
  touristAttractions: TTouristAttraction[]
  className?: string
  heading?: string
}

const SectionMagazineTour: FC<Props> = ({ touristAttractions, className, heading, subHeading, dimHeading }) => {
  return (
    <div className={clsx('section-magazine-7 relative', className)}>
      <HeadingWithSub subHeading={subHeading} dimHeading={dimHeading}>
        {heading}
      </HeadingWithSub>
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <CardMagazineTour touristAttraction={touristAttractions[0]} />
          <CardMagazineTour galleryType={2} touristAttraction={touristAttractions[1]} />
        </div>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <CardMagazineTour touristAttraction={touristAttractions[2]} />
          <CardMagazineTour galleryType={2} touristAttraction={touristAttractions[3]} />
        </div>
      </div>
    </div>
  )
}

export default SectionMagazineTour
