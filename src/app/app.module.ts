import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,   
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }