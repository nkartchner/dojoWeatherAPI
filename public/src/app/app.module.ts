// CORE IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//HTTP IMPORTS
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'
//ROUTES
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { ChicagoComponent } from './chicago/chicago.component';
//FORMS MODULE
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    DcComponent,
    SanjoseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
