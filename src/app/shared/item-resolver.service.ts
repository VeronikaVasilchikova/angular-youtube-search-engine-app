import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { VideoItemModel } from "../models/video-item.model";
import { VideoItemService } from "../shared/video-item.service";

@Injectable({providedIn: "root"})
export class ItemResolverService implements Resolve <VideoItemModel[]>{
  constructor(
    private videoItemService: VideoItemService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const videos = this.videoItemService.getVideoItems();
    return videos;
  }
}
