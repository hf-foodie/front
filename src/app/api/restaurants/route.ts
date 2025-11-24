import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/data/posts')
    const postDirectories = await fs.promises.readdir(postsDirectory, { withFileTypes: true })

    const restaurantPosts = await Promise.all(
      postDirectories
        .filter((dirent) => dirent.isDirectory())
        .map(async (dirent) => {
          const dirPath = path.join(postsDirectory, dirent.name)
          const files = await fs.promises.readdir(dirPath)
          const jsonFile = files.find((file) => file.endsWith('.json'))

          if (jsonFile) {
            const filePath = path.join(dirPath, jsonFile)
            const fileContents = await fs.promises.readFile(filePath, 'utf8')
            return JSON.parse(fileContents)
          }
          return null
        })
    )

    const validPosts = restaurantPosts.filter((post) => post !== null)

    if (validPosts.length === 0) {
      return NextResponse.json({ message: 'No restaurant data found' }, { status: 404 })
    }

    return NextResponse.json(validPosts)
  } catch (error) {
    console.error('Error reading restaurant posts in API route:', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
