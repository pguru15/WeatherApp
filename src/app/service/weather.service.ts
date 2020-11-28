import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './../weather-data/weather-data';
import { WeatherItem } from './../structure/weather-item';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherIcon: string;

  constructor(private http: HttpClient) { }

  getWeatherItems(): WeatherItem[] {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem): void {
    WEATHER_ITEMS.unshift(weatherItem);
  }

  clearWeatherItem(): void {
    WEATHER_ITEMS.splice(0, WEATHER_ITEMS.length);
  }

  searchWeatherData(cityName: string): void {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=b84cccf999d97300217d98efe7918484&units=metric')
    .subscribe(data => {
      const weatherItem = new WeatherItem(data['name'], data['weather'][0]['description'], data['main']['temp']);
      this.weatherIcon = data['weather'][0]['icon'];
      this.addWeatherItem(weatherItem);
    });
    // this.http.get('api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=KEY&units=metric')
    //   .subscribe
      // .catch(error => {
      //   console.error(error);
      //   return Observable.throw(error.json());
      // });
  }
}
