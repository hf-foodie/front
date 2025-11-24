'use client'

import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const images = [
  '/images/advertisement/main_01.png',
  '/images/advertisement/main_02.png',
  '/images/advertisement/main_03.png',
]

const SectionHero2: FC = () => {
  const [indexActive, setIndexActive] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleClickNext = () => {
    setIndexActive((state) => (state >= images.length - 1 ? 0 : state + 1))
  }

  const handleClickPrev = () => {
    setIndexActive((state) => (state === 0 ? images.length - 1 : state - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleClickNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [indexActive])

  const handlers = useSwipeable({
    onSwipedLeft: handleClickNext,
    onSwipedRight: handleClickPrev,
    trackMouse: true,
  })

  return (
    <div
      className="relative"
      {...handlers}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="section-hero-2 relative bg-black pb-20 md:py-32 lg:py-36">
        {images.map((src, index) => {
          if (indexActive !== index) return null
          return (
            <div key={index} className="mb-10 flex w-full md:absolute md:end-0 md:top-0 md:bottom-0 md:mb-0 md:w-1/2 xl:w-3/5">
              <div className="absolute start-0 top-0 bottom-0 z-1 hidden w-44 bg-linear-to-r from-black md:block rtl:bg-linear-to-l" />
              <Image
                fill
                className="object-contain"
                src={src}
                sizes="1260px"
                alt="hero"
                priority
              />
            </div>
          )
        })}
        <div className="relative z-1 container text-neutral-100">
          <div className="max-w-3xl">
            <h1 className="mt-3 text-4xl font-bold md:text-5xl/[1.1] xl:text-6xl">"오늘 뭐 먹지?"</h1>
            <p className="mt-7 text-base text-neutral-300 lg:text-xl">
              오늘의 메뉴를 정해보세요
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div
        className={clsx(
          'absolute inset-y-0 z-10 flex w-full items-center justify-between px-4 transition-opacity duration-300',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        <button
          onClick={handleClickPrev}
          className="p-2 bg-white/50 rounded-full hover:bg-white/80 transition-colors"
        >
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={handleClickNext}
          className="p-2 bg-white/50 rounded-full hover:bg-white/80 transition-colors"
        >
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  )
}

export default SectionHero2
