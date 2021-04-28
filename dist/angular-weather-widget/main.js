(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\assignment\Weather-Application-Manish\src\main.ts */"zUnb");


/***/ }),

/***/ "0zBU":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-widget-main/weather-widget-main.component */ "WXMW");




function HomeComponent_app_weather_widget_main_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-widget-main", 5);
} if (rf & 2) {
    const city_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", city_r1);
} }
class HomeComponent {
    constructor() {
        this.cities = ['Barcelona', 'Florence', 'Paris', 'Helsinki', 'Prague'];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 1, consts: [[1, "mainWrapper"], [1, "container", "box"], [1, "row"], [1, "heading"], ["class", "col-md-3", 3, "location", 4, "ngFor", "ngForOf"], [1, "col-md-3", 3, "location"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Weather App - Manish Bharti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_app_weather_widget_main_6_Template, 1, 1, "app-weather-widget-main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetMainComponent"]], styles: [".mainWrapper[_ngcontent-%COMP%]{\r\n  background: linear-gradient(to top, #86DBFF 0%, #e0c3fc 100%);\r\n\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n    margin: 0 auto;\r\n    background: #fff;\r\n    padding: 5px 15px;\r\n    border-radius: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZEQUE2RDs7QUFFL0Q7O0FBRUE7RUFDRSxlQUFlO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5XcmFwcGVye1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM4NkRCRkYgMCUsICNlMGMzZmMgMTAwJSk7XHJcblxyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BGH1":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/weather-detail-page/weather-detail-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WeatherDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailPageComponent", function() { return WeatherDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _weather_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather-api.service */ "FYdx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/error.component */ "kX37");








const _c0 = ["citySearchInput"];
function WeatherDetailPageComponent_div_33_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherDetailPageComponent_div_33_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherDetailPageComponent_div_33_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherDetailPageComponent_div_33_div_3_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherDetailPageComponent_div_33_div_3_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isDay);
} }
function WeatherDetailPageComponent_div_33_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherDetailPageComponent_div_33_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherDetailPageComponent_div_33_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherDetailPageComponent_div_33_div_4_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherDetailPageComponent_div_33_div_4_div_2_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isDay);
} }
function WeatherDetailPageComponent_div_33_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherDetailPageComponent_div_33_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherDetailPageComponent_div_33_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherDetailPageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeatherDetailPageComponent_div_33_div_3_Template, 5, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeatherDetailPageComponent_div_33_div_4_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeatherDetailPageComponent_div_33_div_5_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeatherDetailPageComponent_div_33_div_6_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WeatherDetailPageComponent_div_33_div_7_Template, 8, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", day_r2.value.state === "Clouds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", day_r2.value.state === "Sunny" || day_r2.value.state === "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", day_r2.value.state === "Rain" || day_r2.value.state === "Drizzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", day_r2.value.state === "Haze" || day_r2.value.state === "Fog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", day_r2.value.state === "Storm" || day_r2.value.state === "Thunderstorm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", day_r2.value.temp, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r2.value.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SL: ", day_r2.value.sealevel, "");
} }
class WeatherDetailPageComponent {
    constructor(weatherapiService, router, activeRouter) {
        this.weatherapiService = weatherapiService;
        this.router = router;
        this.activeRouter = activeRouter;
    }
    ngOnInit() {
        this.units = 'metric';
        this.sub = this.activeRouter.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((route) => {
            this.city = route.params.city;
            this.params = route.params;
            this.cityIllustrationPath = '../../assets/cities/default.svg';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.weatherapiService.getWeatherData(this.city, this.units), this.weatherapiService.getForecastData(this.city, this.units));
        })).subscribe((response) => {
            this.getDayForecast(response);
        }, (err) => {
            this.errorMessage = err.message;
            setTimeout(() => {
                this.errorMessage = '';
            }, 2500);
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.citySearchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
            return event.target.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe((text) => {
            // this.city = text;
            this.searchCityWeather(text);
        }, (err) => {
            this.errorMessage = err.message;
            setTimeout(() => {
                this.errorMessage = '';
            }, 2500);
        });
    }
    getDayForecast(dayForecastData) {
        this.state = dayForecastData[0].weather[0].main;
        this.temp = Math.ceil(Number(dayForecastData[0].main.temp));
        this.hum = dayForecastData[0].main.humidity;
        let sunsetTime = new Date(dayForecastData[0].sys.sunset * 1000);
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
                dates[date].temp_min += res.main.temp_min;
                dates[date].temp_max += res.main.temp_max;
                dates[date].sealevel += res.main.sea_level;
            }
            else {
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
    searchCityWeather(searchValue) {
        this.sub.unsubscribe();
        if (searchValue == '' || searchValue == undefined) {
            searchValue = this.params['city'];
        }
        this.sub2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.weatherapiService.getWeatherData(searchValue, this.units), this.weatherapiService.getForecastData(searchValue, this.units))
            .subscribe((response) => {
            this.city = searchValue;
            this.getDayForecast(response);
        }, (err) => {
            if (err === "404 Not Found") {
                this.errorMessage = searchValue + ' City Not Found';
            }
            else {
                this.errorMessage = err.message;
            }
            setTimeout(() => {
                this.errorMessage = '';
            }, 2500);
        });
    }
    ngOnDestroy() {
        if (!this.sub.closed) {
            this.sub.unsubscribe();
        }
        if (this.sub2 && !this.sub2.closed) {
            this.sub2.unsubscribe();
        }
    }
}
WeatherDetailPageComponent.ɵfac = function WeatherDetailPageComponent_Factory(t) { return new (t || WeatherDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_api_service__WEBPACK_IMPORTED_MODULE_3__["WeatherAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
WeatherDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherDetailPageComponent, selectors: [["app-weather-detail-page"]], viewQuery: function WeatherDetailPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.citySearchInput = _t.first);
    } }, decls: 36, vars: 9, consts: [[1, "details-page-wrapper"], [1, "search-bar"], ["type", "text", "placeholder", "Search City"], ["citySearchInput", ""], ["routerLink", "", 1, "back-button"], [1, "fas", "fa-arrow-circle-left"], [1, "body-content-wrapper"], [1, "card-header-container-dark", "col-md-5"], [1, "header-content-wrapper"], [1, "today-weather-container"], [1, "temp-state-container"], [1, "temperature-text"], [1, "weather-state-text"], [1, "hum-wind-container"], [1, "hum-container"], [1, "hum-text"], [1, "hum-value-text"], [1, "hum-wind-separator"], [1, "wind-container"], [1, "wind-text"], [1, "wind-value-text"], [1, "city-name-container"], [1, "city-name-underline"], [1, "city-name-text"], [1, "forecast-container", "col-md-7"], ["class", "day-weather-container", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "message"], [1, "day-weather-container", 3, "ngSwitch"], [1, "day-name-text"], ["class", "sign", 4, "ngSwitchCase"], [1, "day-temp-text"], [1, "day-state-text"], ["title", "Sea Level", 1, "day-state-text"], [1, "sign"], ["class", "panel-row", 4, "ngIf"], [1, "panel-row", "cloud-div"], [1, "fas", "fa-cloud", "fa-2x", "cloud"], [1, "panel-row"], [1, "fas", "fa-3x", "fa-sun", "sun"], [1, "fas", "fa-3x", "fa-moon", "moon"], [1, "fas", "fa-cloud-rain", "fa-3x", "cloud"], [1, "fas", "fa-smog", "fa-3x", "cloud"], ["viewBox", "-59 0 512 512.00065", "height", "40px", "width", "40px", 1, "forecast-condition-icon"], ["d", "m224.941406 142.167969-48.4375 111.492187h31.660156c9.304688 0 14.386719 10.855469 8.425782 18l-90.269532 108.210938-106.886718 128.132812c-7.492188 8.976563-21.957032 1.570313-19.054688-9.757812l51.132813-199.414063h-38.378907c-7.902343 0-13.2148432-8.097656-10.066406-15.34375l48.445313-111.480469h-38.382813c-7.898437 0-13.2109372-8.097656-10.0625-15.347656l65.207032-150.0625c1.742187-4.003906 5.695312-6.597656 10.0625-6.597656h136.539062c7.902344 0 13.210938 8.097656 10.0625 15.34375l-48.433594 111.480469h38.371094c7.902344 0 13.214844 8.097656 10.066406 15.34375zm0 0", "fill", "yellow"], ["d", "m224.941406 142.167969-48.4375 111.492187h31.660156c9.304688 0 14.386719 10.855469 8.425782 18l-90.269532 108.210938 17.480469-68.179688c1.671875-6.515625-3.25-12.859375-9.976562-12.859375h-25.105469c-7.902344 0-13.210938-8.097656-10.0625-15.34375l42.183594-97.074219c2.957031-6.804687-2.03125-14.40625-9.449219-14.40625h-22.671875c-7.902344 0-13.210938-8.101562-10.0625-15.347656l68.074219-156.660156h48.148437c7.898438 0 13.210938 8.097656 10.0625 15.34375l-48.4375 111.480469h38.375c7.898438 0 13.210938 8.097656 10.0625 15.34375zm0 0", "fill", "yellow"], ["d", "m393.902344 222.675781-25.054688 57.671875h16.375c4.816406 0 7.445313 5.613282 4.359375 9.308594l-102.734375 111.484375c-7.253906 7.871094-20.210937.828125-17.554687-9.542969l22.535156-87.882812h-19.851563c-4.089843 0-6.835937-4.191406-5.207031-7.941406l25.058594-57.664063h-19.851563c-4.089843 0-6.835937-4.1875-5.207031-7.9375l33.730469-77.625c.902344-2.074219 2.945312-3.414063 5.207031-3.414063h82.992188c4.085937 0 6.832031 4.1875 5.203125 7.9375l-25.054688 57.667969h19.851563c4.085937 0 6.832031 4.1875 5.203125 7.9375zm0 0", "fill", "yellow"], ["d", "m393.90625 222.671875-25.054688 57.671875h16.371094c4.820313 0 7.445313 5.613281 4.355469 9.3125l-102.726563 111.480469c-7.253906 7.875-20.214843.832031-17.554687-9.539063l9.25-36.074218 60.695313-65.867188c3.09375-3.699219.464843-9.3125-4.355469-9.3125h-8.515625c-3.710938 0-6.203125-3.804688-4.726563-7.203125l21.925781-50.46875c1.628907-3.75-1.121093-7.929687-5.214843-7.929687h-11.984375c-3.710938 0-6.203125-3.804688-4.726563-7.203126l21.925781-50.46875c1.628907-3.75-1.121093-7.941406-5.210937-7.941406h50.332031c4.09375 0 6.84375 4.191406 5.214844 7.941406l-25.054688 57.671876h19.839844c4.089844 0 6.839844 4.179687 5.214844 7.929687zm0 0", "fill", "yellow"]], template: function WeatherDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "humidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "wind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, WeatherDetailPageComponent_div_33_Template, 14, 10, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-error", 26);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.temp, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hum, " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.wind, " K/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 7, ctx.daysForecast));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx.errorMessage);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], styles: [".details-page-wrapper[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to top, #86DBFF 0%, #e0c3fc 100%);\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n  min-height: 100vh;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n    background: #fff;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    border: 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n.header-content-wrapper[_ngcontent-%COMP%] {\r\n  color: white;\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  width: 100%;\r\n\r\n}\r\n\r\n.temperature-text[_ngcontent-%COMP%] {\r\n  font-size: 6rem;\r\n  letter-spacing: 0.75rem;\r\n}\r\n\r\n.city-name-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-bottom: 25%;\r\n}\r\n\r\n.city-name-underline[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border-radius: 5px;\r\n  height: 5px;\r\n  box-shadow: 0 3rem 0 0 #ffffff;\r\n}\r\n\r\n.city-name-text[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.3rem;\r\n  font-size: 1.55rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.today-weather-container[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  justify-self: center;\r\n  display: grid;\r\n  width: 100%;\r\n  grid-template-rows: 3fr 1fr;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  grid-gap: 2rem;\r\n}\r\n\r\n.temp-state-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-flow: column;\r\n}\r\n\r\n.weather-state-text[_ngcontent-%COMP%] {\r\n  letter-spacing: 0.5rem;\r\n  font-size: 1.15rem;\r\n  text-transform: uppercase;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.hum-wind-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: -4rem;\r\n}\r\n\r\n.hum-wind-separator[_ngcontent-%COMP%] {\r\n  margin: 0 2rem;\r\n  width: 2px;\r\n  height: 2.5rem;\r\n  background-color: white;\r\n}\r\n\r\n.hum-text[_ngcontent-%COMP%], .wind-text[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  font-size: 0.8rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.hum-container[_ngcontent-%COMP%], .wind-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.body-content-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  grid-template-columns: 1fr 1.5fr;\r\n  grid-template-rows: 1fr;\r\n  justify-items: center;\r\n  justify-content: center;\r\n  align-content: flex-start;\r\n  align-items: flex-start;\r\n  box-sizing: border-box;\r\n  grid-column-gap: 1rem;\r\n  width: 80%;\r\n    padding: 2rem;\r\n    margin: 0 auto;\r\n}\r\n\r\n.forecast-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row;\r\n  margin-left: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.twitter-feed-container[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.twitter-feed-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-flow: column;\r\n}\r\n\r\n.twitter-loader[_ngcontent-%COMP%] {\r\n  border: 3px solid hsla(185, 100%, 62%, 0.2);\r\n  border-top-color: #3cefff;\r\n  border-radius: 50%;\r\n  width: 3em;\r\n  height: 3em;\r\n  animation: spin 1s linear infinite;\r\n  justify-self: center;\r\n  align-self: center;\r\n  margin-top: 3rem;\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.twitter-no-tweets-text[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.twitter-feed-text[_ngcontent-%COMP%] {\r\n  color: #0c1066;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.twitter-icon[_ngcontent-%COMP%] {\r\n  width: 1.5rem;\r\n}\r\n\r\n.twitter-feed-tag-text[_ngcontent-%COMP%] {\r\n  font-size: 0.85rem;\r\n  color: #5f84fb;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.twitter-feed-header[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-rows: 2rem;\r\n  grid-template-columns: 0.5fr 1.5fr 1fr;\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.twitter-tweet-container[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.tweet-user-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tweet-avatar-image[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem;\r\n  border-radius: 50%;\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\n\r\n.tweet-username-text[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n\r\n.tweet-text[_ngcontent-%COMP%] {\r\n  margin-top: 0\r\n}\r\n\r\n.day-weather-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: column;\r\n  margin: 2rem 1.5rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.day-name-text[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  color: #39437a;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.forecast-condition-icon[_ngcontent-%COMP%] {\r\n  height: 2rem;\r\n  margin-top: -18px;\r\n  \r\n  margin-left: 14px\r\n}\r\n\r\n.day-temp-text[_ngcontent-%COMP%] {\r\n  font-size: 1.85rem;\r\n  color: #0c1066;\r\n  letter-spacing: 0.25rem;\r\n  margin: 0.75rem 0;\r\n  text-align: center;\r\n  padding-left: 0.35rem;\r\n}\r\n\r\n.day-state-text[_ngcontent-%COMP%] {\r\n  font-size: 0.65rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.2rem;\r\n  color: #2B244D;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1919px) {\r\n  .main-weather-card[_ngcontent-%COMP%] {\r\n    height: 80%;\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1279px) {\r\n  .back-button[_ngcontent-%COMP%] {\r\n    top: 1rem;\r\n  }\r\n\r\n  .main-weather-card[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n\r\n  .body-content-wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 959px) {\r\n\r\n  .header-content-wrapper[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 2fr 1fr;\r\n  }\r\n\r\n  .back-button[_ngcontent-%COMP%] {\r\n    position: static;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .details-page-wrapper[_ngcontent-%COMP%] {\r\n    flex-flow: column;\r\n  }\r\n\r\n  .hum-wind-container[_ngcontent-%COMP%], .temp-state-container[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .city-name-container[_ngcontent-%COMP%] {\r\n    padding-bottom: 0;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 775px) {\r\n  .body-content-wrapper[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n\r\n}\r\n\r\n.sun[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  color: yellow;\r\n  filter: drop-shadow( 1px 1px 10px yellow);\r\n}\r\n\r\n.moon[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  color: white;\r\n  filter: drop-shadow( 1px 1px 10px white);\r\n}\r\n\r\n.cloud-sun-rain[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  color: yellow;\r\n  filter: drop-shadow( 1px 1px 10px yellow);\r\n}\r\n\r\n.cloud-moon-rain[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  color: white;\r\n  filter: drop-shadow( 1px 1px 10px white);\r\n}\r\n\r\n.cloud-div[_ngcontent-%COMP%]{\r\n  margin-top: -40px;\r\n}\r\n\r\n.cloud[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  margin-left: 14px;\r\n  color: rgb(104, 175, 197);\r\n  filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197));\r\n  \r\n}\r\n\r\n@keyframes Moving{\r\n  from{margin-left: -5px;}\r\n  to{margin-left: 5px;}\r\n}\r\n\r\n.back-button[_ngcontent-%COMP%]{\r\n  font-size: 50px;\r\n  position: absolute;\r\n  top: 3rem;\r\n  left: 3.25rem;\r\n  width: 5rem;\r\n  cursor: pointer;\r\n  z-index: 6;\r\n  margin-top: 2rem;\r\n  color: #17a2b8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLWRldGFpbC1wYWdlL3dlYXRoZXItZGV0YWlsLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZEQUE2RDtFQUM3RCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxXQUFXOztBQUViOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtJQUNSLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDRjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQSwyQkFBMkI7O0FBQzNCOztFQUVFO0lBQ0UsMEJBQTBCO0lBQzFCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztBQUVGOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvREFBb0Q7RUFDcEQ7Ozs7bUNBSWlDO0FBQ25DOztBQUVBO0VBQ0UsS0FBSyxpQkFBaUIsQ0FBQztFQUN2QixHQUFHLGdCQUFnQixDQUFDO0FBQ3RCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLWRldGFpbC1wYWdlL3dlYXRoZXItZGV0YWlsLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLXBhZ2Utd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzg2REJGRiAwJSwgI2UwYzNmYyAxMDAlKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIGlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50LXdyYXBwZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4udGVtcGVyYXR1cmUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiA2cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbn1cclxuXHJcbi5jaXR5LW5hbWUtdW5kZXJsaW5lIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcmVtIDAgMCAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2l0eS1uYW1lLXRleHQge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcclxuICBmb250LXNpemU6IDEuNTVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi50b2RheS13ZWF0aGVyLWNvbnRhaW5lciB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBncmlkLWdhcDogMnJlbTtcclxufVxyXG5cclxuLnRlbXAtc3RhdGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4ud2VhdGhlci1zdGF0ZS10ZXh0IHtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5odW0td2luZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogLTRyZW07XHJcbn1cclxuXHJcbi5odW0td2luZC1zZXBhcmF0b3Ige1xyXG4gIG1hcmdpbjogMCAycmVtO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5odW0tdGV4dCwgLndpbmQtdGV4dCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5odW0tY29udGFpbmVyLCAud2luZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLypcclxuPT09PT09PT09PT09PT09PVxyXG4gICAgIEJPRFlcclxuPT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuLmJvZHktY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udHdpdHRlci1mZWVkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLnR3aXR0ZXItbG9hZGVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBoc2xhKDE4NSwgMTAwJSwgNjIlLCAwLjIpO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMzY2VmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50d2l0dGVyLW5vLXR3ZWV0cy10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnR3aXR0ZXItZmVlZC10ZXh0IHtcclxuICBjb2xvcjogIzBjMTA2NjtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyLWljb24ge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWQtdGFnLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBjb2xvcjogIzVmODRmYjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50d2l0dGVyLWZlZWQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50d2l0dGVyLXR3ZWV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnR3ZWV0LXVzZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi50d2VldC1hdmF0YXItaW1hZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi50d2VldC11c2VybmFtZS10ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnR3ZWV0LXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDBcclxufVxyXG5cclxuLmRheS13ZWF0aGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBtYXJnaW46IDJyZW0gMS41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXktbmFtZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogIzM5NDM3YTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcmVjYXN0LWNvbmRpdGlvbi1pY29uIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4XHJcbn1cclxuXHJcbi5kYXktdGVtcC10ZXh0IHtcclxuICBmb250LXNpemU6IDEuODVyZW07XHJcbiAgY29sb3I6ICMwYzEwNjY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMC4zNXJlbTtcclxufVxyXG5cclxuLmRheS1zdGF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG4gIGNvbG9yOiAjMkIyNDREO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeTogICBMVC1YTCAgICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gIC5tYWluLXdlYXRoZXItY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeTogICBMVC1MRyAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHRvcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5tYWluLXdlYXRoZXItY2FyZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmJvZHktY29udGVudC13cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaWEgUXVlcnk6ICAgTFQtTUQgICAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG5cclxuICAuaGVhZGVyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcclxuICB9XHJcblxyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxzLXBhZ2Utd3JhcHBlciB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5odW0td2luZC1jb250YWluZXIsIC50ZW1wLXN0YXRlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5jaXR5LW5hbWUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XHJcbiAgLmJvZHktY29udGVudC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5zdW57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coIDFweCAxcHggMTBweCB5ZWxsb3cpO1xyXG59XHJcblxyXG4ubW9vbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDEwcHggd2hpdGUpO1xyXG59XHJcbi5jbG91ZC1zdW4tcmFpbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCAxMHB4IHllbGxvdyk7XHJcbn1cclxuXHJcbi5jbG91ZC1tb29uLXJhaW57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCAxMHB4IHdoaXRlKTtcclxufVxyXG4uY2xvdWQtZGl2e1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcblxyXG4uY2xvdWR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTRweDtcclxuICBjb2xvcjogcmdiKDEwNCwgMTc1LCAxOTcpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coIDFweCAxcHggNXB4IHJnYigxMDQsIDE3NSwgMTk3KSk7XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IE1vdmluZztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgKi9cclxufVxyXG5cclxuQGtleWZyYW1lcyBNb3Zpbmd7XHJcbiAgZnJvbXttYXJnaW4tbGVmdDogLTVweDt9XHJcbiAgdG97bWFyZ2luLWxlZnQ6IDVweDt9XHJcbn1cclxuXHJcblxyXG4uYmFjay1idXR0b257XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDNyZW07XHJcbiAgbGVmdDogMy4yNXJlbTtcclxuICB3aWR0aDogNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogNjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGNvbG9yOiAjMTdhMmI4O1xyXG59XHJcbiJdfQ== */", ".box[_ngcontent-%COMP%] {\n    padding-top: 50px;\n}\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 70px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    font-family: \"impact\";\n    width: 100%;\n    border-left: 6px solid black;\n    background-color: lightgrey;\n    background-attachment: fixed;\n}\n\n@media only screen and (max-width: 600px) {\n    h1[_ngcontent-%COMP%] {\n        font-size: 50px;\n    }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n    .box[_ngcontent-%COMP%] {\n        padding-top: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcImltcGFjdFwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5ib3gge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-detail-page',
                templateUrl: './weather-detail-page.component.html',
                styleUrls: ['./weather-detail-page.component.css', '../../app.component.css']
            }]
    }], function () { return [{ type: _weather_api_service__WEBPACK_IMPORTED_MODULE_3__["WeatherAPIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { citySearchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['citySearchInput', { static: true }]
        }] }); })();


/***/ }),

/***/ "FYdx":
/*!***************************************************!*\
  !*** ./src/app/Components/weather-api.service.ts ***!
  \***************************************************/
/*! exports provided: WeatherAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherAPIService", function() { return WeatherAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class WeatherAPIService {
    constructor(http) {
        this.http = http;
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.forcastURL = 'https://api.openweathermap.org/data/2.5/forecast';
        this.apikey = "3d8b309701a13f65b660fa2c64cdc517";
    }
    getWeatherData(location, units) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('appid', this.apikey)
            .set('units', units)
            .set('q', location);
        return this.http.get(this.baseURL, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getForecastData(location, units) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('appid', this.apikey)
            .set('units', units)
            .set('q', location);
        return this.http.get(this.forcastURL, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        /*
        return throwError(error);
        */
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.status + " " + error.statusText);
    }
}
WeatherAPIService.ɵfac = function WeatherAPIService_Factory(t) { return new (t || WeatherAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WeatherAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherAPIService, factory: WeatherAPIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".box[_ngcontent-%COMP%] {\n    padding-top: 50px;\n}\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 70px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    font-family: \"impact\";\n    width: 100%;\n    border-left: 6px solid black;\n    background-color: lightgrey;\n    background-attachment: fixed;\n}\n\n@media only screen and (max-width: 600px) {\n    h1[_ngcontent-%COMP%] {\n        font-size: 50px;\n    }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n    .box[_ngcontent-%COMP%] {\n        padding-top: 50px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcImltcGFjdFwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5ib3gge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WXMW":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/weather-widget-main/weather-widget-main.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WeatherWidgetMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetMainComponent", function() { return WeatherWidgetMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weather_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-api.service */ "FYdx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/error.component */ "kX37");






function WeatherWidgetMainComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherWidgetMainComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherWidgetMainComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherWidgetMainComponent_div_4_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherWidgetMainComponent_div_4_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isDay);
} }
function WeatherWidgetMainComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherWidgetMainComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherWidgetMainComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherWidgetMainComponent_div_5_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherWidgetMainComponent_div_5_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isDay);
} }
function WeatherWidgetMainComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherWidgetMainComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherWidgetMainComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WeatherWidgetMainComponent {
    constructor(weatherapiService, router) {
        this.weatherapiService = weatherapiService;
        this.router = router;
        this.isCollapsed = false;
        this.enter = false;
    }
    ngOnInit() {
        this.units = 'metric';
        this.refresh(this.location);
    }
    refresh(data) {
        this.value = data;
        this.sendToAPI(this.value);
    }
    sendToAPI(location) {
        this.weatherSub = this.weatherapiService.getWeatherData(location, this.units)
            .subscribe((data) => {
            this.setWeatherData(data);
            this.weatherData = data;
            console.log(this.weatherData);
            this.errorMessage = '';
        }, (err) => {
            this.errorMessage = err.message;
            setTimeout(() => {
                this.errorMessage = '';
            }, 2500);
        });
    }
    setWeatherData(data) {
        this.weatherData = data;
        let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
        let sunriseTime = new Date(this.weatherData.sys.sunrise * 1000);
        this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
        this.weatherData.sunrise_time = sunriseTime.toLocaleTimeString();
        let currentDate = new Date();
        this.isDay = (currentDate.getTime() < sunsetTime.getTime());
    }
    openDetails() {
        this.router.navigateByUrl('/details/' + this.location);
    }
    ngOnDestroy() {
        this.weatherSub.unsubscribe();
    }
}
WeatherWidgetMainComponent.ɵfac = function WeatherWidgetMainComponent_Factory(t) { return new (t || WeatherWidgetMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_api_service__WEBPACK_IMPORTED_MODULE_1__["WeatherAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
WeatherWidgetMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherWidgetMainComponent, selectors: [["app-weather-widget-main"]], inputs: { location: "location" }, decls: 28, vars: 14, consts: [[1, "weather-widget-card", 3, "click"], [1, "weather-row", "city-name-text"], [1, "weather", 3, "ngSwitch"], ["class", "sign", 4, "ngSwitchCase"], [1, "weather-detail"], [1, "weather-row", "temperature-text"], [1, "weather-row", "weather-condition-text"], [1, "weather-row", "min-max-container"], [1, "min-text"], [1, "min-temperature-text"], [1, "max-text"], [1, "max-temperature-text"], [1, "weather-row"], [1, "weather-row", 2, "margin-bottom", "4%"], [3, "message"], [1, "sign"], ["class", "weather-row", 4, "ngIf"], [1, "weather-row", "cloud-div"], [1, "fas", "fa-cloud", "fa-3x", "cloud"], [1, "fas", "fa-3x", "fa-sun", "sun"], [1, "fas", "fa-3x", "fa-moon", "moon"], [1, "fas", "fa-cloud-rain", "fa-3x", "cloud"], [1, "fas", "fa-smog", "fa-3x", "cloud"], [1, "fas", "fa-cloud", "fa-2x", "cloud"], ["viewBox", "-59 0 512 512.00065", "height", "40px", "width", "40px", 1, "forecast-condition__icon"], ["d", "m224.941406 142.167969-48.4375 111.492187h31.660156c9.304688 0 14.386719 10.855469 8.425782 18l-90.269532 108.210938-106.886718 128.132812c-7.492188 8.976563-21.957032 1.570313-19.054688-9.757812l51.132813-199.414063h-38.378907c-7.902343 0-13.2148432-8.097656-10.066406-15.34375l48.445313-111.480469h-38.382813c-7.898437 0-13.2109372-8.097656-10.0625-15.347656l65.207032-150.0625c1.742187-4.003906 5.695312-6.597656 10.0625-6.597656h136.539062c7.902344 0 13.210938 8.097656 10.0625 15.34375l-48.433594 111.480469h38.371094c7.902344 0 13.214844 8.097656 10.066406 15.34375zm0 0", "fill", "yellow"], ["d", "m224.941406 142.167969-48.4375 111.492187h31.660156c9.304688 0 14.386719 10.855469 8.425782 18l-90.269532 108.210938 17.480469-68.179688c1.671875-6.515625-3.25-12.859375-9.976562-12.859375h-25.105469c-7.902344 0-13.210938-8.097656-10.0625-15.34375l42.183594-97.074219c2.957031-6.804687-2.03125-14.40625-9.449219-14.40625h-22.671875c-7.902344 0-13.210938-8.101562-10.0625-15.347656l68.074219-156.660156h48.148437c7.898438 0 13.210938 8.097656 10.0625 15.34375l-48.4375 111.480469h38.375c7.898438 0 13.210938 8.097656 10.0625 15.34375zm0 0", "fill", "yellow"], ["d", "m393.902344 222.675781-25.054688 57.671875h16.375c4.816406 0 7.445313 5.613282 4.359375 9.308594l-102.734375 111.484375c-7.253906 7.871094-20.210937.828125-17.554687-9.542969l22.535156-87.882812h-19.851563c-4.089843 0-6.835937-4.191406-5.207031-7.941406l25.058594-57.664063h-19.851563c-4.089843 0-6.835937-4.1875-5.207031-7.9375l33.730469-77.625c.902344-2.074219 2.945312-3.414063 5.207031-3.414063h82.992188c4.085937 0 6.832031 4.1875 5.203125 7.9375l-25.054688 57.667969h19.851563c4.085937 0 6.832031 4.1875 5.203125 7.9375zm0 0", "fill", "yellow"], ["d", "m393.90625 222.671875-25.054688 57.671875h16.371094c4.820313 0 7.445313 5.613281 4.355469 9.3125l-102.726563 111.480469c-7.253906 7.875-20.214843.832031-17.554687-9.539063l9.25-36.074218 60.695313-65.867188c3.09375-3.699219.464843-9.3125-4.355469-9.3125h-8.515625c-3.710938 0-6.203125-3.804688-4.726563-7.203125l21.925781-50.46875c1.628907-3.75-1.121093-7.929687-5.214843-7.929687h-11.984375c-3.710938 0-6.203125-3.804688-4.726563-7.203126l21.925781-50.46875c1.628907-3.75-1.121093-7.941406-5.210937-7.941406h50.332031c4.09375 0 6.84375 4.191406 5.214844 7.941406l-25.054688 57.671876h19.839844c4.089844 0 6.839844 4.179687 5.214844 7.929687zm0 0", "fill", "yellow"]], template: function WeatherWidgetMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherWidgetMainComponent_Template_div_click_0_listener() { return ctx.openDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeatherWidgetMainComponent_div_4_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeatherWidgetMainComponent_div_5_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeatherWidgetMainComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WeatherWidgetMainComponent_div_7_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WeatherWidgetMainComponent_div_8_Template, 8, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Min:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Max:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-error", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weatherData == null ? null : ctx.weatherData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) == "Clouds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Sunny" || (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Rain" || (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Drizzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Haze" || (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Fog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Storm" || (ctx.weatherData == null ? null : ctx.weatherData.weather[0].main) === "Thunderstorm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weatherData == null ? null : ctx.weatherData.main.temp.toFixed(0), "\u00B0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weatherData == null ? null : ctx.weatherData.weather[0].description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.weatherData == null ? null : ctx.weatherData.main.temp_min.toFixed(0), "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.weatherData == null ? null : ctx.weatherData.main.temp_max.toFixed(0), "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunrise: ", ctx.weatherData == null ? null : ctx.weatherData.sunrise_time, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sunset: ", ctx.weatherData == null ? null : ctx.weatherData.sunset_time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".weather-widget-card[_ngcontent-%COMP%]{\n    background: #FFF;\n    color: #000;\n    padding: 15%;\n    padding-top: 11%;\n    margin: 2%;\n    border-radius: 15px;\n    text-align: center;\n    height: 400px;\n    text-transform: capitalize;\n}\n\n.issue[_ngcontent-%COMP%] {\n    margin-top: 25px;\n}\n\nh5[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{\n    margin-top: 25% ;\n    font-weight: 700;\n    text-shadow: 2px 2px 4px #318ce7;\n}\n\n.btn[_ngcontent-%COMP%]{\n    background: linear-gradient(to right, #3399ff 0%, #0033cc 100%);\n    color: #fff;\n    box-shadow: 0px 2.5px 2px 0px rgba(13,163,143,0.5);\n    font-weight: 700;\n    text-shadow: 2px 4px 4px  #031a5f;\n    border-radius: 6px;\n    padding-top: 3px;\n}\n\n.btn[_ngcontent-%COMP%]:hover{\n    background: linear-gradient(to left, #3399ff 0%, #0033cc 100%);\n}\n\ninput[_ngcontent-%COMP%]{\n    margin-bottom: 7%;\n}\n\n.sign[_ngcontent-%COMP%]{\n  height:75px;\n}\n\n.weather-row[_ngcontent-%COMP%]{\n    display: block;\n    margin: 0 auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding: 0.6%;\n    font-size: 16px;\n    margin-bottom: 5px;\n}\n\n.weather-detail[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n\n.city-name-text[_ngcontent-%COMP%]{\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  letter-spacing: .1rem;\n  margin-bottom: 1rem;\n}\n\n.temperature-text[_ngcontent-%COMP%]{\n  text-align: start;\n  font-size: 3rem;\n}\n\n.min-text[_ngcontent-%COMP%], .max-text[_ngcontent-%COMP%]{\n  margin: 0 5px;\n}\n\n.weather-condition-text[_ngcontent-%COMP%]{\n  display: block;\n    font-size: 1rem;\n    text-transform: uppercase;\n    letter-spacing: .1rem;\n    text-align: center;\n}\n\n.min-temperature-text[_ngcontent-%COMP%]{\n  margin-right: 10px;\n  color: #00ff9b;\n  font-weight: bold;\n}\n\n.max-temperature-text[_ngcontent-%COMP%]{\n  color: #ff0070;\n  font-weight: bold;\n}\n\n.sun[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    color: yellow;\n    filter: drop-shadow( 1px 1px 10px yellow);\n}\n\n.moon[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    color: #c1c1c1;\n    filter: drop-shadow( 1px 1px 10px #c1c1c1);\n}\n\n.cloud-div[_ngcontent-%COMP%]{\n    margin-top: -40px;\n}\n\n.cloud[_ngcontent-%COMP%]{\n    color: rgb(104, 175, 197);\n    filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197));\n    animation-name: Moving;\n    animation-iteration-count: infinite;\n    animation-duration: 10s;\n    animation-timing-function: ease-in-out;\n    animation-direction: alternate;\n}\n\n@keyframes Moving{\n    from{margin-left: -55px;}\n    to{margin-left: 65px;}\n}\n\n@media only screen and (max-width: 600px) {\n    .weather-widget-card[_ngcontent-%COMP%]{\n        padding-top: 10%;\n    }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 767px) {\n    .weather-widget-card[_ngcontent-%COMP%] {\n        padding-top: 5%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1tYWluL3dlYXRoZXItd2lkZ2V0LW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSwrREFBK0Q7SUFDL0QsV0FBVztJQUNYLGtEQUFrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4REFBOEQ7QUFDbEU7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvREFBb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLEtBQUssa0JBQWtCLENBQUM7SUFDeEIsR0FBRyxpQkFBaUIsQ0FBQztBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvd2VhdGhlci13aWRnZXQtbWFpbi93ZWF0aGVyLXdpZGdldC1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VhdGhlci13aWRnZXQtY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDE1JTtcbiAgICBwYWRkaW5nLXRvcDogMTElO1xuICAgIG1hcmdpbjogMiU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmlzc3VlIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5oNSxsYWJlbHtcbiAgICBtYXJnaW4tdG9wOiAyNSUgO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMzMThjZTc7XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzM5OWZmIDAlLCAjMDAzM2NjIDEwMCUpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAyLjVweCAycHggMHB4IHJnYmEoMTMsMTYzLDE0MywwLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1zaGFkb3c6IDJweCA0cHggNHB4ICAjMDMxYTVmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4uYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMzM5OWZmIDAlLCAjMDAzM2NjIDEwMCUpO1xufVxuXG5pbnB1dHtcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cbi5zaWdue1xuICBoZWlnaHQ6NzVweDtcbn1cbi53ZWF0aGVyLXJvd3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMC42JTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ud2VhdGhlci1kZXRhaWwge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jaXR5LW5hbWUtdGV4dHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRlbXBlcmF0dXJlLXRleHR7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDNyZW07XG59XG4ubWluLXRleHQsIC5tYXgtdGV4dHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi53ZWF0aGVyLWNvbmRpdGlvbi10ZXh0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1pbi10ZW1wZXJhdHVyZS10ZXh0e1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjMDBmZjliO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYXgtdGVtcGVyYXR1cmUtdGV4dHtcbiAgY29sb3I6ICNmZjAwNzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3Vue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDEwcHggeWVsbG93KTtcbn1cblxuLm1vb257XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogI2MxYzFjMTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDEwcHggI2MxYzFjMSk7XG59XG5cbi5jbG91ZC1kaXZ7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG5cbi5jbG91ZHtcbiAgICBjb2xvcjogcmdiKDEwNCwgMTc1LCAxOTcpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDFweCAxcHggNXB4IHJnYigxMDQsIDE3NSwgMTk3KSk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IE1vdmluZztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgTW92aW5ne1xuICAgIGZyb217bWFyZ2luLWxlZnQ6IC01NXB4O31cbiAgICB0b3ttYXJnaW4tbGVmdDogNjVweDt9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAud2VhdGhlci13aWRnZXQtY2FyZHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC53ZWF0aGVyLXdpZGdldC1jYXJkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWidgetMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-widget-main',
                templateUrl: './weather-widget-main.component.html',
                styleUrls: ['./weather-widget-main.component.css']
            }]
    }], function () { return [{ type: _weather_api_service__WEBPACK_IMPORTED_MODULE_1__["WeatherAPIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Components_weather_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/weather-api.service */ "FYdx");
/* harmony import */ var _Components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/weather-widget-main/weather-widget-main.component */ "WXMW");
/* harmony import */ var _Components_weather_detail_page_weather_detail_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/weather-detail-page/weather-detail-page.component */ "BGH1");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/error/error.component */ "kX37");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Components_weather_api_service__WEBPACK_IMPORTED_MODULE_6__["WeatherAPIService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _Components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_7__["WeatherWidgetMainComponent"],
        _Components_weather_detail_page_weather_detail_page_component__WEBPACK_IMPORTED_MODULE_8__["WeatherDetailPageComponent"],
        _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _Components_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _Components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_7__["WeatherWidgetMainComponent"],
                    _Components_weather_detail_page_weather_detail_page_component__WEBPACK_IMPORTED_MODULE_8__["WeatherDetailPageComponent"],
                    _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _Components_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [_Components_weather_api_service__WEBPACK_IMPORTED_MODULE_6__["WeatherAPIService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kX37":
/*!*****************************************************!*\
  !*** ./src/app/Components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "error-wrapper-active": a0 }; };
class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], inputs: { message: "message" }, decls: 3, vars: 4, consts: [[1, "error-wrapper", 3, "ngClass"], [1, "error-message"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.message));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".error-wrapper[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 50%;\r\n  bottom: 0;\r\n  transform: translate(-50%, 5rem);\r\n  width: 70%;\r\n  background-color: crimson;\r\n  color: white;\r\n  height: 4rem;\r\n  border-radius: 0.25rem 0.25rem 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 3rem;\r\n  transition: transform 1s ease-in-out;\r\n  z-index: 9999999999;\r\n}\r\n\r\n.error-wrapper-active[_ngcontent-%COMP%] {\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: capitalize;\r\n  line-height: 1.25rem;\r\n  display: block;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1cmVtKTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk7XHJcbn1cclxuXHJcbi5lcnJvci13cmFwcGVyLWFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_weather_detail_page_weather_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/weather-detail-page/weather-detail-page.component */ "BGH1");






const routes = [
    { path: '', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'details/:city', component: _Components_weather_detail_page_weather_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["WeatherDetailPageComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map