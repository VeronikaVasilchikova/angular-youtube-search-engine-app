import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ResultItemComponent } from './components/search-results/result-item/result-item.component';
import { SearchPanelComponent } from './components/header/search-panel/search-panel.component';
import { FilterPanelComponent } from './components/header/filter-panel/filter-panel.component';
import { LoginPanelComponent } from './components/header/login-panel/login-panel.component';
import { LoginFormComponent } from './components/header/login-panel/login-form/login-form.component';
import { ItemDetailsComponent } from './components/search-results/item-details/item-details.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from "./app-routing.module";
import { VideoItemService } from "./shared/video-item.service";
import { DataStorageService } from "./shared/data-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    ResultItemComponent,
    SearchPanelComponent,
    FilterPanelComponent,
    LoginPanelComponent,
    LoginFormComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    VideoItemService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
