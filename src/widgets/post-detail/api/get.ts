import { allPosts, sampleComments } from './data'
import type { PostData } from './types'

export const getPostData = (id: string): PostData | null => {
  return allPosts[id] || null
}

export const getComments = () => sampleComments
