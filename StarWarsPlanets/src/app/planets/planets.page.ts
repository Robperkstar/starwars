import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { forkJoin } from "rxjs";
import { Result } from "src/types/films";
import { Planet } from "src/types/planets";
@Component({
  selector: "app-planets",
  templateUrl: "planets.page.html",
})
export class Planets implements OnInit {
  film = "John";
  planets = [];
  id = "";
  api = `https://swapi.dev/api/films/`;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get("id");
    });
    this.fetchData();
  }

  private fetchData() {
    this.http.get(this.api + this.id).subscribe((data: Result) => {
      this.fetchPlanets(data.planets);
    });
  }
  private fetchPlanets(planetUrls) {
    const requests = planetUrls.map((url) => this.http.get(url));
    forkJoin(requests).subscribe((results: Planet[]) => {
      const names = results.map((result) => result.name);
      this.planets = names;
    });
  }
}
