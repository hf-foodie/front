'use client'

import { ThemeContext } from '@/app/theme-provider'
import { useCarouselArrowButtons } from '@/hooks/use-carousel-arrow-buttons'
import { HeadingWithSubProps } from '@/shared/Heading'
import HeadingWithArrowBtns from '@/shared/HeadingWithArrowBtns'
import clsx from 'clsx'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { FC, useContext } from 'react'
import CardBranch from '@/components/SectionBranches/CardBranch'
import { TBranch } from '@/data/branches'

interface Props extends Pick<HeadingWithSubProps, 'subHeading' | 'dimHeading'> {
  className?: string
  heading?: string
  branches: TBranch[]
  categoryCardType?: 'card1' | 'card2' | 'card3' | 'card4' | 'card5'
  emblaOptions?: EmblaOptionsType
}

const SectionSliderNewCategories: FC<Props> = ({
  heading,
  subHeading,
  dimHeading,
  className,
  branches,
  emblaOptions = {
    slidesToScroll: 'auto',
  },
}) => {
  const theme = useContext(ThemeContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...emblaOptions, direction: theme?.themeDir })
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCarouselArrowButtons(emblaApi)

  const renderCard = (item: TBranch, index: number) => {
    const topIndex = index < 3 ? `#${index + 1}` : undefined
    return <CardBranch key={index} branch={item} />
  }

  return (
    <div className={clsx('section-slider-new-categories relative', className)}>
      <HeadingWithArrowBtns
        subHeading={subHeading}
        dimHeading={dimHeading}
        hasNextPrev
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
        onClickPrev={onPrevButtonClick}
        onClickNext={onNextButtonClick}
      >
        {heading}
      </HeadingWithArrowBtns>

      <div className="embla" ref={emblaRef}>
        <div className="-ms-5 embla__container sm:-ms-7">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className="embla__slide basis-[86%] ps-5 sm:basis-1/2 sm:ps-7 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              {renderCard(branch, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionSliderNewCategories
