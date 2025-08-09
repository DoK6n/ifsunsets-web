import { queryOptions } from '@tanstack/react-query'
import ky from 'ky'
import type { YoutubePlaylistItem } from '~/routes/api/youtube/-types'

export const youtubeQueries = {
  playlistItems: () =>
    queryOptions({
      queryKey: ['youtubePlaylistItems'],
      queryFn: () => ky.get('api/youtube/playlist').json<YoutubePlaylistItem[]>(),
    }),
}
