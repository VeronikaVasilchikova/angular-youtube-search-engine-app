export interface SearchItemModel {
  kind: string,
  etag: string,
  id: Id,
  snippet: Snippet
}

interface Id {
  kind: string,
  videoId: string
}

interface Snippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: ThumbnailsMain,
  channelTitle: string,
  liveBroadcastContent: string,
  publishTime: string
}

interface ThumbnailsMain {
  default: Thumbnails,
  medium: Thumbnails,
  high: Thumbnails
}
interface Thumbnails {
  url: string,
  width: number,
  height: number
}
