import ky from 'ky'

export const httpClient = ky.create({
  prefixUrl: import.meta.env.VITE_YOUTUBE_DATA_API_V3_BASE_URL,
})
