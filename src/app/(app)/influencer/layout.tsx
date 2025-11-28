import { ApplicationLayout } from '@/app/(app)/application-layout'
import { ReactNode } from 'react'
import BgGlassmorphism from "@/components/BgGlassmorphism";
import PageHeader from "@/app/(app)/influencer/intern/page-header";
import {Heading} from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <ApplicationLayout>
            <BgGlassmorphism />
            {children}

        </ApplicationLayout>
    )
}

export default Layout
