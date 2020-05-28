import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Planets } from "./planets.page";
import { PlanetsRoutingModule } from "./planets-routing.module";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, PlanetsRoutingModule],
  declarations: [Planets],
})
export class PlanetsPageModule {}
