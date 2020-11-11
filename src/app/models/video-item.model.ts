export interface VideoItemModel {
  kind: string,
  etag: string,
  id: string,
  snippet: Snippet,
  statistics: Statistics
}

interface Snippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: ThumbnailsMain,
  channelTitle: string,
  tags: [],
  categoryId: string,
  liveBroadcastContent: string,
  localized: Localized,
  defaultAudioLanguage: string
}

interface ThumbnailsMain {
  default: Thumbnails,
  medium: Thumbnails,
  high: Thumbnails,
  standard: Thumbnails,
  maxres: Thumbnails
}

interface Thumbnails {
  url: string,
  width: number,
  height: number
}

interface Localized {
  title: string,
  description: string
}

interface Statistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}
