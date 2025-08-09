export type YoutubeThumbnail = {
  url: string
  width: number
  height: number
}

export type YoutubeThumbnails = {
  default?: YoutubeThumbnail
  medium?: YoutubeThumbnail
  high?: YoutubeThumbnail
  standard?: YoutubeThumbnail
  maxres?: YoutubeThumbnail
}

export type YoutubePlaylistItem = {
  /** API 리소스의 유형을 식별합니다. 값은 youtube#playlistItem입니다. */
  kind: string
  /** 이 리소스의 Etag입니다. */
  etag: string
  /** YouTube에서 재생목록 항목을 고유하게 식별하는 데 사용하는 ID입니다. */
  id: string
  /** snippet 객체에는 재생목록 항목의 제목, 재생목록 내 위치와 같은 재생목록 항목에 관한 기본 세부정보가 포함되어 있습니다. */
  snippet: {
    /** 재생목록에 항목이 추가된 날짜 및 시간입니다. 값은 ISO 8601 형식으로 지정됩니다. */
    publishedAt: string
    /** YouTube에서 재생목록에 항목을 추가한 사용자를 고유하게 식별하는 데 사용하는 ID입니다. */
    channelId: string
    /** 재생목록 항목의 제목입니다. */
    title: string
    /** 재생목록 항목의 설명입니다. */
    description: string
    /** 재생목록 항목과 연결된 썸네일 이미지의 맵입니다. */
    thumbnails: YoutubeThumbnails
    /** 재생목록을 만든 채널의 제목입니다. */
    channelTitle: string
    /** 재생목록 항목의 리소스를 소유한 채널의 제목입니다. */
    videoOwnerChannelTitle?: string
    /** 재생목록 항목의 리소스를 소유한 채널의 ID입니다. */
    videoOwnerChannelId?: string
    /** 재생목록 항목이 포함된 재생목록의 ID입니다. */
    playlistId: string
    /** 재생목록에서 항목의 순서를 나타냅니다. 값은 0부터 시작하는 색인을 사용합니다. */
    position: number
    /** resourceId 객체에는 재생목록 항목이 참조하는 YouTube 리소스를 식별하는 정보가 포함되어 있습니다. */
    resourceId: {
      /** 참조된 리소스의 API 리소스 유형을 식별합니다. */
      kind: string
      /** 참조된 리소스가 동영상인 경우 이 속성에서 YouTube에서 동영상을 고유하게 식별하는 데 사용하는 ID를 지정합니다. */
      videoId: string
    }
  }
  /** 포함된 항목이 YouTube 동영상인 경우 contentDetails 객체가 리소스에 포함됩니다. 개체는 동영상에 대한 추가 정보를 포함합니다. */
  contentDetails?: {
    /** YouTube에서 동영상을 고유하게 식별하는 데 사용하는 ID입니다. */
    videoId: string
    /** 참고: 이 속성은 지원 중단되었으며 설정된 경우 값이 무시됩니다. 동영상 재생이 시작되는 시간을 동영상 시작 부분부터 초 단위로 측정한 값입니다. */
    startAt?: string
    /** 참고: 이 속성은 지원 중단되었으며 설정된 경우 값이 무시됩니다. 동영상 재생을 중지해야 할 시간을 동영상 시작 부분부터 초 단위로 측정합니다. */
    endAt?: string
    /** 사용자가 생성한 이 항목에 관한 메모입니다. 속성 값의 최대 길이는 280자(영문 기준)입니다. */
    note?: string
    /** 동영상이 YouTube에 게시된 날짜 및 시간입니다. 값은 ISO 8601 형식으로 지정됩니다. */
    videoPublishedAt: string
  }
  /** status 객체에는 재생목록 항목의 개인 정보 보호 상태에 관한 정보가 포함됩니다. */
  status?: {
    /** 재생목록 항목의 공개 상태입니다. */
    privacyStatus: 'public' | 'unlisted' | 'private'
  }
}
