import { Component, OnInit } from '@angular/core';
import { WEATHER_ITEMS } from './../weather-data/weather-data';
import { WeatherItem } from '../structure/weather-item';
import { WeatherService } from '../service/weather.service';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherItems = this.weatherService.getWeatherItems();
  }

}
