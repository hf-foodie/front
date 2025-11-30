import { ApplicationLayout } from '@/app/(app)/application-layout'
import { ReactNode } from 'react'
import BgGlassmorphism from "@/components/BgGlassmorphism";

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
