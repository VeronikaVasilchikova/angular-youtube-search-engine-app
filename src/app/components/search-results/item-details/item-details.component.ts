import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VideoItemModel } from "../../../models/video-item.model";
import { VideoItemService } from "../../../shared/video-item.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() video: VideoItemModel;
  id: number;

  constructor(
    private videoItemService: VideoItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params["id"];
          this.video = this.videoItemService.getVideoItem(this.id);
        }
      )
  }

  onBackToList() {
    this.router.navigate(["/search-results"]);
  }

}
