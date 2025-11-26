import {Badge, BadgeButton} from '@/shared/Badge'
import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
  itemClass?: string
  names: {
    name: string
    handle: string
    color: string
  }
}

const MagazineBadgeList: FC<Props> = ({ className, itemClass, names }) => {
  return (
    <div className={clsx('category-badge-list flex flex-wrap gap-x-2 gap-y-1', className)}>
      <Badge className={itemClass} key={0} color={names.color as any}>
        {names.name}
      </Badge>
    </div>
  )
}

export default MagazineBadgeList
