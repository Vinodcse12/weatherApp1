import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  citiesWeather = [];
  constructor(private router: Router,
    private wheatherService: WeatherService) {

  }
  ngOnInit() {
    this.wheatherService.getEuropeCities()
      .pipe(
        map((res: any) => {
          return res;
        })
      ).subscribe((cities: any) => {
        forkJoin(
          cities.map(c =>
            this.wheatherService.getCurrentWeather(c.name).pipe(
              map((res: any[]) => {
                return res;
              })
            )
          )
        ).subscribe((p: any[][]) => {
          this.citiesWeather = [].concat(...p);
        });
      })

  }

  getForcastDetails(name: string) {
    console.log(name);
    this.router.navigate(['forcast-weather', name]);
  }
}
