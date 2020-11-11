import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginFormComponent } from "./components/header/login-panel/login-form/login-form.component";
import { SearchResultsComponent } from "./components/search-results/search-results.component";
import { ItemDetailsComponent } from "./components/search-results/item-details/item-details.component";
import { ItemResolverService } from "./shared/item-resolver.service";

const AppRouter: Routes = [
  {path: "", redirectTo: "auth", pathMatch: "full"},
  {path: "auth", component: LoginFormComponent},
  {path: "search-results", component: SearchResultsComponent, children: [
    {path: ":id", component: ItemDetailsComponent, resolve: [ItemResolverService]}
  ]},
]

@NgModule({
  imports: [
    RouterModule.forRoot(AppRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
