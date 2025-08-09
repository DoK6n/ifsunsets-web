import ky from 'ky'

export const httpClient = ky.create({
  prefixUrl: import.meta.env.VITE_STOVE_API_BASE_URL,
  headers: {
    'x-lang': 'ko',
    'x-nation': 'KR',
    'x-timezone': 'Asia/Seoul',
  },
})
