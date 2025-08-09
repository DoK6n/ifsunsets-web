import type { YoutubePlaylistItem } from './playlist'

export interface YoutubePlaylistItemsResponse {
  kind: string
  etag: string
  nextPageToken?: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: YoutubePlaylistItem[]
}
