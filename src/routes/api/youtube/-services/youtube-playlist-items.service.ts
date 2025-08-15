import type { YouTubePlaylistItemsRequestDto } from '../-dtos'
import { httpClient } from '../-lib'
import type { YoutubePlaylistItemsResponse } from '../-types'
import { asSearchParams } from '../../-lib'

export class YoutubePlaylistItemsService {
  public index = async (dto: YouTubePlaylistItemsRequestDto) => {
    const response = await httpClient.get('playlistItems', {
      searchParams: asSearchParams(dto),
    })

    const data = await response.json<YoutubePlaylistItemsResponse>()

    return data.items
  }
}
