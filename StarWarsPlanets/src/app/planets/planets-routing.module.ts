import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Planets } from "./planets.page";

const routes: Routes = [
  {
    path: "",
    component: Planets,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
