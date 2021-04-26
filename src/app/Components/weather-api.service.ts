import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private readonly baseURL = "https://api.openweathermap.org/data/2.5/weather";
  private readonly forcastURL = 'https://api.openweathermap.org/data/2.5/forecast';
  apikey = "3d8b309701a13f65b660fa2c64cdc517";

  constructor(private http: HttpClient) { }

  getWeatherData(location, units): Observable<any>{
    let params = new HttpParams()
    .set('appid', this.apikey)
    .set('units', units)
    .set('q', location)
    return this.http.get<any>(this.baseURL,{params}).pipe(catchError(this.handleError));
  }

  getForecastData(location, units): Observable<any>{
    let params = new HttpParams()
    .set('appid', this.apikey)
    .set('units', units)
    .set('q', location)
    return this.http.get<any>(this.forcastURL,{params}).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    /*
    return throwError(error);
    */
    return throwError(error.status + " " + error.statusText);
  }
}
