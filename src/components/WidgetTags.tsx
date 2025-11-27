import { TTag } from '@/data/categories'
import Tag from '@/shared/Tag'
import clsx from 'clsx'
import { FC } from 'react'
import WidgetHeading from './WidgetHeading'

interface Props {
  className?: string
  tags: string[]
}

const WidgetTags: FC<Props> = ({ className = 'bg-neutral-100 dark:bg-neutral-800', tags }) => {
  return (
    <div className={clsx('widget-tags overflow-hidden rounded-3xl', className)}>
      <WidgetHeading title="추천 태그" viewAll={{ label: '모두보기', href: '/#' }} />
      <div className="flex flex-wrap p-4 xl:p-5">
        {tags?.map((tag) => (
          <Tag className="mr-2 mb-2" key={tag} href={`/category/${tag}`}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  )
}

export default WidgetTags
