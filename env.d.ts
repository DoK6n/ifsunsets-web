/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STOVE_API_BASE_URL: string
  readonly VITE_V1: string
  readonly VITE_V2: string
  readonly VITE_YOUTUBE_DATA_API_V3_KEY: string
  readonly VITE_YOUTUBE_DATA_API_V3_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}