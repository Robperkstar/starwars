import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { FilmsPage } from "./films.page";

import { FilmsPageRoutingModule } from "./films-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FilmsPageRoutingModule],
  declarations: [FilmsPage],
})
export class FilmsPageModule {}
