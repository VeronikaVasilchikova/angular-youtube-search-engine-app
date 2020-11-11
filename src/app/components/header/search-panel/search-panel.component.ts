import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() showFilterPanel = new EventEmitter();
  searchForm: FormGroup;

  constructor(
    private dataStorageService: DataStorageService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.searchForm = new FormGroup({
      "search": new FormControl(""),
    });
  }

  onSubmit() {
    this.dataStorageService.searchVideosByKeyWord(this.searchForm.value.search).subscribe();
  }

  public onShowFilterPanel() {
    this.showFilterPanel.emit();
  }

}
