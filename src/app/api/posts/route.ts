import { getAllPosts } from '@/data/posts.server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const query = searchParams.get('q')

  let posts = await getAllPosts()

  if (query) {
    posts = posts.filter((post) => {
      const lowerCaseQuery = query.toLowerCase()
      return post.name.toLowerCase().includes(lowerCaseQuery)
    })
  }

  return NextResponse.json(posts)
}
