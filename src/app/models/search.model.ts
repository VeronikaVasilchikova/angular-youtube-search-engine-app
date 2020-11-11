import { SearchItemModel } from "./search-item.model";

export interface SearchModel {
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string,
  pageInfo: PageInfo,
  items: SearchItemModel[]
}

interface PageInfo {
  totalResults: number,
  resultsPerPage: number
}
