// This file contains server-only data fetching logic.
// It is safe to use Node.js modules like 'fs' here.
import 'server-only'

import fs from 'fs'
import path from 'path'
import {getPostByHandle} from "@/data/posts";

const postsDirectory = path.join(process.cwd(), 'src/data/posts')

/**
 * Returns an array of post handles (filenames without .json)
 * Used by generateStaticParams.
 */
export function getAllPostHandles() {
  try {
    const filenames = fs.readdirSync(postsDirectory)
    return filenames
      .filter((filename) => filename.endsWith('.json'))
      .map((filename) => filename.replace(/\.json$/, ''))
  } catch (error) {
    console.error('Error reading post handles:', error)
    return []
  }
}

/**
 * Reads a single JSON post file from the src/data/posts directory
 * based on the handle (filename without extension).
 * @param handle The handle of the post (e.g., "00001")
 */
export function getPostByHandleFromFs(handle: string) {
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
export function getAllPostsFromFs() {
  try {
    const filenames = fs.readdirSync(postsDirectory)

    const jsonFiles = filenames.filter((filename) => filename.endsWith('.json'))

    const posts = jsonFiles.map((filename) => {
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

export type TPostDetail = Awaited<ReturnType<typeof getPostByHandleFromFs>>