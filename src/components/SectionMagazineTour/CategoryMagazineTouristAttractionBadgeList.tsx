import {Badge, BadgeButton} from '@/shared/Badge'
import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
  itemClass?: string
  categories: {
    name: string
    handle: string
    color: string
  }[]
}

const CategoryMagazineTouristAttractionBadgeList: FC<Props> = ({ className, itemClass, categories }) => {
  return (
    <div className={clsx('category-badge-list flex flex-wrap gap-x-2 gap-y-1', className)}>
      {categories.map((item, index) => (
        <Badge className={itemClass} key={index} color={item.color as any}>
          {item.name}
        </Badge>
      ))}
    </div>
  )
}

export default CategoryMagazineTouristAttractionBadgeList
