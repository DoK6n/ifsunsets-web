import { createMiddleware } from '@tanstack/react-start'
import { YoutubePlaylistItemsService } from '../-services'

export const YoutubePlaylistItemsModule = createMiddleware({ type: 'request' }).server(({ next }) =>
  next({
    context: {
      youtubePlaylistItemsService: new YoutubePlaylistItemsService(),
    },
  }),
)
