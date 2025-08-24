import { queryOptions } from '@tanstack/react-query'
import type { YoutubePlaylistItem } from '~/routes/api/youtube/-types'
import { api } from '~/shared/lib'

export const youtubeQueries = {
  playlistItems: () =>
    queryOptions({
      queryKey: ['youtubePlaylistItems'],
      queryFn: () => api.get('api/youtube/playlist').json<YoutubePlaylistItem[]>(),
    }),
}
