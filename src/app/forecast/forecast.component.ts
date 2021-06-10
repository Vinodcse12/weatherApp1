import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  loc: string;
  forecast: any = <any>{};
  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.loc = params.get('name');
        this.weatherService.getForecast(this.loc)
          .subscribe(res => {
            this.forecast = res;
          }, err => {
            console.log(err);
          })
      })
  }
}