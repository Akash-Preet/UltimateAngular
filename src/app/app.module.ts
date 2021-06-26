import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    //Angular Modules
    BrowserModule,
    CommonModule,
    //Custom Modules
    PassengerDashboardModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
