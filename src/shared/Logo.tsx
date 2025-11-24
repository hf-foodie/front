import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  size?: string
}

const Logo: React.FC<Props> = ({ className, size = 'w-[250px]' }) => {
  return (
    <Link href="/" className={clsx('inline-block shrink-0', className)}>
      <Image
        src="/images/logo/main_01.png"
        alt="Logo"
        width={250}
        height={61}
        className={size}
        priority
      />
    </Link>
  )
}

export default Logo
