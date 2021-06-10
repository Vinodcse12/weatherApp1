import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
const apiKey: string = environment.api_key;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getEuropeCities() {
    return this.http.get('../../assets/data.json');
  }
  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`)
  }
  getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}`)
  }
}