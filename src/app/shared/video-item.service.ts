import { Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { VideoItemModel } from "../models/video-item.model";

@Injectable()
export class VideoItemService {
  changedItem = new Subject<VideoItemModel[]>();
  private videoItems: VideoItemModel[] = [];

  constructor() {}

  setVideoItems(videoItems: VideoItemModel[]) {
    this.videoItems = videoItems;
    this.changedItem.next(this.videoItems.slice());
  }

  getVideoItems() {
    return this.videoItems.slice();
  }

  getVideoItem(index: number) {
    return this.videoItems[index];
  }
}
