
import WidgetTags from '@/components/WidgetTags'
import {getPostByHandle} from '@/data/posts.server' // Import getAllPostHandles
import { Metadata } from 'next'
import SingleContentContainer from '../SingleContentContainer'
import SingleHeaderContainer from '../SingleHeaderContainer'
import {getCommentByHandles} from "@/data/comment.server";
import WidgetInfo from "@/components/WidgetInfo";
import {notFound} from "next/navigation";

export async function generateMetadata({ params }: { params: { handle: string } }): Promise<Metadata> {
  const { handle } = params
  const post = getPostByHandle(handle)
  if (!post) {
    return {
      title: 'Post not found',
      description: 'Post not found',
    }
  }
  return {
    title: post.title,
    description: post.subtitle,
  }
}

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {
    const { handle } = await params

    const post = await getPostByHandle(handle)
    const comments = await getCommentByHandles('P00001')

    if (!post) {
        notFound();
    }

  return (
    <>
      <div className="single-post-page">
        <SingleHeaderContainer post={post} comments={comments} />
        <div className="container mt-12 flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 xl:w-2/3 xl:pe-20">
              <SingleContentContainer post={post} comments={comments} />
          </div>

            <div className="mt-12 w-full lg:mt-0 lg:w-2/5 lg:ps-10 xl:w-1/3 xl:ps-0">
                <div className="space-y-7 lg:sticky lg:top-7">
                    <WidgetInfo name={post.name} address={post.address} phoneNumber={post.phoneNumber} />
                    {post.tags && <WidgetTags tags={post.tags} />}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Page
