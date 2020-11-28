import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from './../structure/weather-item';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {

  iconWeather: string;


  @Input() weatherItem: WeatherItem;

  constructor(private weatherService: WeatherService) {
    this.iconWeather = this.weatherService.weatherIcon;
  }

  ngOnInit(): void {
  }

}
