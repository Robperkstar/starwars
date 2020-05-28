import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "films",
    loadChildren: () =>
      import("./films/films.module").then((m) => m.FilmsPageModule),
    pathMatch: "full",
  },
  {
    path: "films/:id/planet",
    loadChildren: () =>
      import("./planets/planets.module").then((m) => m.PlanetsPageModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
