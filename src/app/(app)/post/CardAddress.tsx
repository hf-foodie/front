import { FC } from 'react'
import clsx from 'clsx'
import { MapPinIcon } from '@heroicons/react/24/outline' // Changed to a restaurant icon

interface Props {
  className?: string
  address: string
}

const CardAddress: FC<Props> = ({ className, address }) => {
  return (
    <div className={clsx('relative flex items-center', className)}>
      <div className="me-4 flex-shrink-0">
        <MapPinIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
      </div>
      <div>
        <h2 className="text-sm font-medium sm:text-base sm:font-semibold">{address}</h2>
      </div>
    </div>
  )
}

export default CardAddress
