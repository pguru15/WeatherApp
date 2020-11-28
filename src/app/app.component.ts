import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../app/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // this.weatherService.searchWeatherData('London');
  }
}
