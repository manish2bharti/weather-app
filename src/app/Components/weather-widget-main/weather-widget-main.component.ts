import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WeatherAPIService } from "../weather-api.service";
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})

export class WeatherWidgetMainComponent implements OnInit, OnDestroy {
  isCollapsed : boolean = false;
  enter: boolean = false;
  error: string;
  weatherData: any;
  isDay: boolean;
  interval;
  value;
  units: string;
  weatherSub: Subscription;

  constructor(private weatherapiService: WeatherAPIService,public router: Router) {}

  @Input() location;
  ngOnInit(): void {
    this.units = 'metric';
    this.refresh(this.location);
  }

  refresh(data){
    this.value = data;
    this.sendToAPI(this.value);
  }

  sendToAPI(location) {
    this.weatherSub = this.weatherapiService.getWeatherData(location, this.units)
    .subscribe(
      (data: any) => {
        this.setWeatherData(data);
        this.weatherData = data;
        console.log(this.weatherData);
        this.error = '';
      }, (err) => {
        this.error = err.error.message;
        setTimeout(() => {
          this.error = '';
        }, 2500);
      }
    )
  }

  setWeatherData(data){
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset*1000);
    let sunriseTime = new Date(this.weatherData.sys.sunrise*1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    this.weatherData.sunrise_time = sunriseTime.toLocaleTimeString();
    let currentDate = new Date();
    this.isDay = (currentDate.getTime() < sunsetTime.getTime());
  }

  openDetails() {
    this.router.navigateByUrl('/details/' + this.location);
  }

  ngOnDestroy(): void {
    this.weatherSub.unsubscribe();
  }
}
