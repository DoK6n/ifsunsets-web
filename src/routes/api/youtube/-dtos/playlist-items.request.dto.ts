export interface YouTubePlaylistItemsRequestDto {
  [key: string]: string
  part: string
  maxResults: string
  status: string
  playlistId: string
  key: string
}

export const createYouTubePlaylistItemsRequest = (
  part: string,
  maxResults: string,
  status: string,
  playlistId: string,
  key: string,
): YouTubePlaylistItemsRequestDto => ({
  part,
  maxResults,
  status,
  playlistId,
  key,
})
