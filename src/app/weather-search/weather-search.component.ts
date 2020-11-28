import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  location = 'Enter Valid City Name';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.weatherService.searchWeatherData(this.location);
  }

  onClear(): void {
    this.weatherService.clearWeatherItem();
    this.location = 'Enter Valid City Name';
  }

}
