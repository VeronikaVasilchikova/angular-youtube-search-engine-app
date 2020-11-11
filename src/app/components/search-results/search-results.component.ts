import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoItemModel } from "../../models/video-item.model";
import { VideoItemService } from "../../shared/video-item.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  videos: VideoItemModel[];
  subscription: Subscription;

  constructor(
    private videoItemService: VideoItemService
  ) { }

  ngOnInit(): void {
    this.subscription = this.videoItemService.changedItem
      .subscribe(
        (response: VideoItemModel[]) => {
          this.videos = response;
        }
      )
    this.videos = this.videoItemService.getVideoItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
