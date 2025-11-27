// This file contains server-only data fetching logic.
// It is safe to use Node.js modules like 'fs' here.
import 'server-only'

import fs from 'fs'
import path from 'path'
import {getPostByHandle} from "@/data/posts";

const commentsDirectory = path.join(process.cwd(), 'src/data/comments')


export function getCommentByHandles(handle: string) {
  const filePath = path.join(commentsDirectory, `${handle}.json`)

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return data
  } catch (error) {
    console.error(`Error reading post with handle "${handle}":`, error)
    return null
  }
}

export type TComment = Awaited<ReturnType<typeof getCommentByHandles>>