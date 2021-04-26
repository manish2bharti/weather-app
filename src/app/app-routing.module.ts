import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { WeatherDetailPageComponent } from './Components/weather-detail-page/weather-detail-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:city', component: WeatherDetailPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
