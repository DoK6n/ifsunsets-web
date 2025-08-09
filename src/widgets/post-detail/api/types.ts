export interface PostData {
  id: string
  title: string
  content: string
  date: string
  category: string
  views: number
  comments: number
  likes: number
  author: string
  authorLevel?: number
  isHot?: boolean
  isPinned?: boolean
}

export interface Comment {
  id: string
  author: string
  authorLevel: number
  content: string
  date: string
  likes: number
}
