import type { YouTubePlaylistItemsRequestDto } from '../-dtos'
import { httpClient } from '../-lib'
import type { YoutubePlaylistItemsResponse } from '../-types'

export class YoutubePlaylistItemsService {
  public index = async (dto: YouTubePlaylistItemsRequestDto) => {
    const response = await httpClient.get('playlistItems', {
      searchParams: dto,
    })

    const data = await response.json<YoutubePlaylistItemsResponse>()

    return data.items
  }
}
