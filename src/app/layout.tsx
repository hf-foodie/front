import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import ThemeProvider from './theme-provider'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - HF',
    default: '오늘뭐먹지',
  },
  description: 'HF Foodie - Front App',
  keywords: ['HF', 'Foodie'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={beVietnamPro.className}>
      <body className="bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
        <ThemeProvider>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
