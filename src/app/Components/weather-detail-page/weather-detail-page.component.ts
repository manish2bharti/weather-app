import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, fromEvent, Observable, Subscription } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { WeatherAPIService } from '../weather-api.service';

@Component({
  selector: 'app-weather-detail-page',
  templateUrl: './weather-detail-page.component.html',
  styleUrls: ['./weather-detail-page.component.css', '../../app.component.css']
})
export class WeatherDetailPageComponent implements OnInit, OnDestroy {
  darkMode: boolean;
  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;
  today: string;
  units: string;
  daysForecast: Object;
  cityIllustrationPath: string;
  sub: Subscription;
  sub2: Subscription;
  errorMessage: string;
  tweets$: Observable<any>;
  isDay: boolean;
  searchCity: string;
  params: Object;

  @ViewChild('citySearchInput', { static: true }) citySearchInput: ElementRef;
  constructor(private weatherapiService: WeatherAPIService,public router: Router,public activeRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.units = 'metric';
    this.sub = this.activeRouter.paramMap.pipe(concatMap((route: any) => {
        this.city = route.params.city;
        this.params = route.params;
        this.cityIllustrationPath = '../../assets/cities/default.svg';
        return forkJoin(this.weatherapiService.getWeatherData(this.city, this.units), this.weatherapiService.getForecastData(this.city, this.units));
      })
    ).subscribe((response: any) => {
      this.getDayForecast(response);
    }, (err) => {
      this.errorMessage = err.message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 2500);
    });

    fromEvent(this.citySearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((text: string) => {
        // this.city = text;
        this.searchCityWeather(text);
      }, (err) => {
        this.errorMessage = err.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 2500);
      }
    );
  }

  getDayForecast(dayForecastData): void{
    this.state = dayForecastData[0].weather[0].main;
    this.temp = Math.ceil(Number(dayForecastData[0].main.temp));
    this.hum = dayForecastData[0].main.humidity;
    let sunsetTime = new Date(dayForecastData[0].sys.sunset*1000);
    let currentDate = new Date();
    this.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.wind = Math.round(Math.round(dayForecastData[0].wind.speed));
    const dates = {};
    var data = dayForecastData[1].list;
    for (const res of data) {
      const date = new Date(res.dt_txt).getDate();
      if (dates[date]) {
        dates[date].counter += 1;
        dates[date].temp += res.main.temp;
        dates[date].temp_min +=  res.main.temp_min;
        dates[date].temp_max +=  res.main.temp_max;
        dates[date].sealevel += res.main.sea_level;
      } else {
        dates[date] = {
          state: res.weather[0].main,
          temp: res.main.temp,
          temp_min: res.main.temp_min,
          temp_max: res.main.temp_max,
          sealevel: res.main.sea_level,
          counter: 1
        };
      }
    }
    Object.keys(dates).forEach((day) => {

      dates[day].temp = Math.round(dates[day].temp / dates[day].counter);
      dates[day].temp_min = Math.round(dates[day].temp_min / dates[day].counter);
      dates[day].temp_max = Math.round(dates[day].temp_max / dates[day].counter);
    });
    delete dates[Object.keys(dates)[0]];
    this.daysForecast = dates;
  }

  searchCityWeather(searchValue: string): void {
    this.sub.unsubscribe();
    if(searchValue == '' || searchValue == undefined){
      searchValue = this.params['city'];
    }
    this.sub2 = forkJoin(this.weatherapiService.getWeatherData(searchValue, this.units), this.weatherapiService.getForecastData(searchValue, this.units))
    .subscribe(
      (response: any) => {
        this.city = searchValue;
        this.getDayForecast(response);
      }, (err) => {
        if(err === "404 Not Found"){
          this.errorMessage = searchValue + ' City Not Found';
        }else{
          this.errorMessage = err.message;
        }
        setTimeout(() => {
          this.errorMessage = '';
        }, 2500);
      }
    )
  }

  ngOnDestroy(): void {
    if(!this.sub.closed){
      this.sub.unsubscribe();
    }

    if(this.sub2 && !this.sub2.closed){
      this.sub2.unsubscribe();
    }
  }

}
