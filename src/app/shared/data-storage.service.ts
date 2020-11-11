import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry , mergeMap } from "rxjs/operators";
import { SearchModel } from "../models/search.model";
import { VideoItemService } from "./video-item.service";
import { VideosModel } from "../models/videos.model";
import { VideoItemModel } from "../models/video-item.model";
import { URL, KEY, PART_BY_KEYWORD, PART_BY_IDS } from "../constants/constants";

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private videoItemService: VideoItemService
  ) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      "Something bad happened; please try again later.");
  }

  searchVideosByKeyWord(query: string): Observable<VideoItemModel[]> {
    return this.http.get<SearchModel>(`${URL}search?key=${KEY}&type=video&${PART_BY_KEYWORD}&q=${query}`)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(response => {
          return response.items.map(item => {
            return item.id.videoId;
          }).join(",");
        }),
        mergeMap(ids => {
          return this.http.get<VideosModel>(`${URL}videos?key=${KEY}&${PART_BY_IDS}&id=${ids}`)
            .pipe(
              retry(3),
              catchError(this.handleError),
              map(response => {
                return response.items.map(item => {
                  return item;
                });
              }),
              tap(response => {
                this.videoItemService.setVideoItems(response);
              })
            )
        })
      )
  }
}
