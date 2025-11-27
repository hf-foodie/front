import { NextResponse } from 'next/server'
import { getAllPostsFromFs } from '@/data/posts'

export async function GET() {
  try {
    const posts = getAllPostsFromFs()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error in /api/posts:', error)
    return NextResponse.json({ message: 'Error reading posts' }, { status: 500 })
  }
}
