
import clsx from 'clsx'
import { FC } from 'react'
import WidgetHeading from './WidgetHeading'
import CardAddress from "@/app/(app)/post/CardAddress";
import CardRestaurantName from "@/app/(app)/post/CardRestaurantName";
import CardPhoneNumber from "@/app/(app)/post/CardPhoneNumber";

interface Props {
    className?: string,
    name: string,
    address: string,
    phoneNumber: string
}

const WidgetInfo: FC<Props> = ({ className = 'bg-neutral-100 dark:bg-neutral-800',
                                   name, address, phoneNumber }) => {
  return (
    <div className={clsx('widget-authors overflow-hidden rounded-3xl', className)}>
      <WidgetHeading title="식당정보" viewAll={ { label: '', href: 'javscript:void(0)' }} />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
            <CardRestaurantName
                className="p-4 hover:bg-neutral-200 xl:p-5 dark:hover:bg-neutral-700"
                name={name}
            />

            <CardAddress
                className="p-4 hover:bg-neutral-200 xl:p-5 dark:hover:bg-neutral-700"
                address={address}
            />

            <CardPhoneNumber
                className="p-4 hover:bg-neutral-200 xl:p-5 dark:hover:bg-neutral-700"
                phoneNumber={phoneNumber}
            />
        </div>
      </div>
    </div>
  )
}

export default WidgetInfo
