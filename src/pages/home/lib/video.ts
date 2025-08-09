import { useSuspenseQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { queries } from '~/entities'
import type { YoutubePlaylistItem } from '~/routes/api/youtube/-types'

export type Video = {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  duration: string
  viewCount?: string
}

const map = (items: YoutubePlaylistItem[]): Video[] =>
  items.map(item => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails?.standard?.url ?? '',
    publishedAt: format(item.snippet.publishedAt, 'yyyy.MM.dd'),
    duration: item.contentDetails?.videoPublishedAt ?? '',
  }))

const sort = (videos: Video[]) =>
  videos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

export const useVideo = () => {
  const { data: playlist } = useSuspenseQuery(queries.youtube.playlistItems())

  return {
    videos: sort(map(playlist)),
  }
}
