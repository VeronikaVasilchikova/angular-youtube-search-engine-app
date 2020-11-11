import { VideoItemModel } from "./video-item.model";

export interface VideosModel {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: VideoItemModel[]
}

interface PageInfo {
  totalResults: number,
  resultsPerPage: number
}
