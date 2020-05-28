import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Films } from "src/types/films";

@Component({
  selector: "app-films",
  templateUrl: "films.page.html",
})
export class FilmsPage {
  films = [];
  api = `https://swapi.dev/api/films/`;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.http.get(this.api).subscribe((data: Films) => {
      this.films = data.results.map((film) => {
        return film.title;
      });
    });
  }
}
