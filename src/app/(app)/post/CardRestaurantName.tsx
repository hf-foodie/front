import { FC } from 'react'
import clsx from 'clsx'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline' // Using outline version for a cleaner look

interface Props {
  className?: string
    name: string
}

const CardAddress: FC<Props> = ({ className, name }) => {
  return (
    <div className={clsx('relative flex items-center', className)}>
      <div className="me-4 flex-shrink-0">
        <BuildingStorefrontIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
      </div>
      <div>
        <h2 className="text-sm font-medium sm:text-base sm:font-semibold">{name}</h2>
      </div>
    </div>
  )
}

export default CardAddress
