import rightImgDemo from '@/images/BecomeAnAuthorImg.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface Props {
  className?: string
  rightImg?: string | StaticImageData
}

const SectionBecomeAnFoodie: FC<Props> = ({ className, rightImg = rightImgDemo }) => {
  return (
    <div className={clsx('section-become-an-author relative flex flex-col items-center lg:flex-row', className)}>
      <div className="mb-14 shrink-0 lg:mr-10 lg:mb-0 lg:w-2/5">
        <span className="text-base font-medium tracking-wider text-neutral-500 uppercase">
          나만이 아는 맛집을 추천해주세요!!
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">HF 맛플루언서가 되어주세요</h2>
        <span className="mt-8 block text-neutral-500 dark:text-neutral-500">
          내가 아는 맛집을 모두에게 공유하여 HF 맛플루언서에 도전해보세요. 맛만 있어도 ok, 가격도 착하면 +, 분위기 까지 좋으면 BEST !!
        </span>
        <ButtonPrimary className="mt-8">맛집 제보하기</ButtonPrimary>
      </div>
      <div className="grow">
        <Image alt="hero" sizes="(max-width: 768px) 100vw, 50vw" src={rightImg} />
      </div>
    </div>
  )
}

export default SectionBecomeAnFoodie
