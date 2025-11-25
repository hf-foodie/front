'use client'

import { Button } from '@/shared/Button'
import Heading, { HeadingWithSubProps } from '@/shared/Heading'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { FC, ReactNode, useState } from 'react'

interface Props extends Pick<HeadingWithSubProps, 'subHeading' | 'dimHeading'> {
  heading: ReactNode
  rightButtonHref?: string
}

const SectionMagazineHeader: FC<Props> = ({
  subHeading,
  dimHeading,
  heading,
  rightButtonHref = '/category/all',
}) => {

  return (
    <div className="section-tab-header relative mb-0.5 flex items-center justify-between">
      <Heading subHeading={subHeading} dimHeading={dimHeading}>
        {heading}
      </Heading>
      <Button outline className="shrink-0" href={rightButtonHref}>
        <span>전체보기</span>
        <ArrowRightIcon className="size-5 rtl:rotate-180" />
      </Button>
    </div>
  )
}

export default SectionMagazineHeader
