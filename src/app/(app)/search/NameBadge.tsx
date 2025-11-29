
import clsx from 'clsx'
import { FC } from 'react'
import {BadgeButton} from "@/app/(app)/search/Badge";

interface Props {
  className?: string
  itemClass?: string
    name: string
    handle: string
    color: string
}

const NameBadge: FC<Props> = ({ className, itemClass, name, handle, color }) => {
  return (
    <div className={clsx('category-badge-list flex flex-wrap gap-x-2 gap-y-1', className)}>
        <BadgeButton className={itemClass} key={0} href={`/post/${handle}`} color={color as any}>
            {name}
        </BadgeButton>
    </div>
  )
}

export default NameBadge
