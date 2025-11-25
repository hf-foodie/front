'use client'

import { getNavigation } from '@/data/navigation'
import { getAllPosts } from '@/data/posts'
import { Button } from '@/shared/Button'
import Logo from '@/shared/Logo'
import { PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import AvatarDropdown from './AvatarDropdown'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'
import NotifyDropdown from './NotifyDropdown'
import SearchModal from './SearchModal'
import { TPost } from '@/data/posts'
import { TNavigationItem } from '@/data/navigation'

interface Props {
  bottomBorder?: boolean
  className?: string
}

const Header: FC<Props> = ({ bottomBorder, className }) => {
  const { y } = useWindowScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [navigationMenu, setNavigationMenu] = useState<TNavigationItem[]>([])
  const [featuredPosts, setFeaturedPosts] = useState<TPost[]>([])

  useEffect(() => {
    setIsScrolled(y > 10)
  }, [y])

  useEffect(() => {
    const fetchData = async () => {
      const menu = await getNavigation()
      const posts = await getAllPosts()
      setNavigationMenu(menu)
      setFeaturedPosts(posts.slice(0, 2))
    }
    fetchData()
  }, [])

  return (
    <div
      className={clsx(
        'header-2 sticky top-0 z-20 border-neutral-200 dark:border-neutral-700',
        'transition-all duration-[2000ms]',
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent',
        bottomBorder && 'border-b',
        !bottomBorder && 'has-[.header-popover-full-panel]:border-b',
        className
      )}
    >
      <div className="container flex h-20 justify-between">
        <div className="flex flex-1 items-center gap-x-4 sm:gap-x-5 lg:gap-x-7">
          <Logo />
          <div className="h-8 border-l"></div>
          <div className="-ms-1.5">
            <SearchModal type="type1" />
          </div>
        </div>

        <div className="mx-4 hidden flex-2 justify-center lg:flex">
          <Navigation menu={navigationMenu} />
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-0.5">

          <NotifyDropdown className="me-3" />
          <AvatarDropdown />
          <div className="ms-2 flex lg:hidden">
            <HamburgerBtnMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
