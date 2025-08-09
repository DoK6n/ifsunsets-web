import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'
import { createYouTubePlaylistItemsRequest } from './-dtos'
import { YoutubePlaylistItemsModule } from './-modules'

export const ServerRoute = createServerFileRoute('/api/youtube/playlist')
  .middleware([YoutubePlaylistItemsModule])
  .methods({
    GET: async ({ context: { youtubePlaylistItemsService } }) => {
      const dto = createYouTubePlaylistItemsRequest(
        'snippet',
        '50',
        '',
        'PLJYWk-hJzs1_wrqGTIDhpxxdngXB7kIGg',
        import.meta.env.VITE_YOUTUBE_DATA_API_V3_KEY,
      )

      const data = await youtubePlaylistItemsService.index(dto)
      return json(data)
    },
  })
