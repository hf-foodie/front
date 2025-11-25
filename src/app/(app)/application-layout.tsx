import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import AsideSidebarNavigation from '@/components/aside-sidebar-navigation'
import Banner from '@/shared/banner'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  headerHasBorder?: boolean
  showBanner?: boolean
}

const ApplicationLayout: React.FC<Props> = ({
  children,
  headerHasBorder,
  showBanner = false,
}) => {
  return (
    <>
      {/* header - Chose header style here / header 1 or header 2*/}
      {showBanner && <Banner />}
      {<Header bottomBorder={headerHasBorder} />}

      {children}
        {/* <Footer /> */}
      {/* aside sidebar navigation */}
      <AsideSidebarNavigation />
    </>
  )
}

export { ApplicationLayout }
