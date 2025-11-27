import { FC } from 'react'
import clsx from 'clsx'
import { PhoneIcon } from '@heroicons/react/24/outline' // Changed to a phone icon

interface Props {
  className?: string
  phoneNumber: string
}

const CardPhoneNumber: FC<Props> = ({ className, phoneNumber }) => {
  return (
    <div className={clsx('relative flex items-center', className)}>
      <div className="me-4 flex-shrink-0">
        <PhoneIcon className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
      </div>
      <div>
        <h2 className="text-sm font-medium sm:text-base sm:font-semibold">{phoneNumber}</h2>
      </div>
    </div>
  )
}

export default CardPhoneNumber
