import CategoryBadgeList from '@/components/CategoryBadgeList'
import { Divider } from '@/shared/divider'
import clsx from 'clsx'
import { FC } from 'react'
import GalleryImages from './GalleryImages'
import SingleMeta from './SingleMeta'
import { SingleMetaAction } from './SingleMetaAction'
import SingleTitle from './SingleTitle'
import {TPostDetail} from "@/data/posts.server";
import {TComment} from "@/data/comment.server";

interface Props {
  className?: string
  post: TPostDetail
    comments: TComment
}

const TitleAndMeta = ({ className, post, comments }: Omit<Props, 'headerStyle'>) => {
    const {
        id,
        firstPostDate,
        badge,
        rating,
        author,
        name,
        title,
        subtitle,
        summary,
        oneLineReviews,
        address,
        detailedAddress,
        addressCategories: { // 더 깊게 중첩된 addressCategories 객체 분해
            cityNm,
            sgguNm,
            emdNm,
            riNm,
            stNm,
            bldgBno,
            bldgBuno
        },
        phoneNumber,
        parkingArea,
        tags,
        images
    } = post

  return (
    <div className={`single-header-meta space-y-5 ${className}`}>
      {/*<CategoryBadgeList categories={categories || []} />*/}
        <SingleTitle title={title} />
        <p className="text-base/relaxed text-neutral-700 md:text-2xl/relaxed dark:text-neutral-400">{subtitle}</p>
        <Divider />
        <div className="flex flex-wrap gap-5">
        <SingleMeta author={author} date={firstPostDate} readingTime={0} />
        <SingleMetaAction
          className="ms-auto"
          commentCount={comments.length}
          handle={id}
          likeCount={comments.like}
          liked={true}
        />
        </div>
    </div>
  )
}

const HeaderGallery = ({ className, post, comments }: Omit<Props, 'defaultStyle'>) => {
  return (
    <>
      <div className="container">
        <Divider />
      </div>
      <div className={clsx('single-header-style-gallery mt-10 lg:mt-16', className)}>
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <TitleAndMeta post={post} comments={comments} />
          </div>
        </div>
        <GalleryImages images={post.images} />
      </div>
    </>
  )
}

const SingleHeaderContainer: FC<Props> = ({ className, post, comments }) => {
    return <HeaderGallery className={className} post={post} comments={comments} />
}

export default SingleHeaderContainer
