// This file contains server-only data fetching logic.
// It is safe to use Node.js modules like 'fs' here.
import 'server-only'

import fs from 'fs'
import path from 'path'
import {TPost} from "@/data/types";

const postsDirectory = path.join(process.cwd(), 'src/data/posts')

/**
 * Reads a single JSON post file from the src/data/posts directory
 * based on the handle (filename without extension).
 * @param handle The handle of the post (e.g., "P00001")
 */
export function getPostByHandle(handle: string): TPost | null {
  const filePath = path.join(postsDirectory, `${handle}.json`)

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return data
  } catch (error) {
    console.error(`Error reading post with handle "${handle}":`, error)
    return null
  }
}

/**
 * Reads all JSON files from the src/data/posts directory.
 * This function is intended to be used only on the server.
 */
export function getAllPosts(): TPost[] {
  try {
    const filenames = fs.readdirSync(postsDirectory)

    const jsonFiles = filenames.filter((filename) => filename.endsWith('.json'))

    const posts: TPost[] = jsonFiles.map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const data = JSON.parse(fileContents)
      return data
    })

    return posts
  } catch (error) {
    console.error('Error reading posts from filesystem:', error)
    return []
  }
}

export type TPostDetail = Awaited<ReturnType<typeof getPostByHandle>>
