import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { Ejercicios1Component } from './ejercicios1/ejercicios1.component';
import { Ejercicios2Component } from './ejercicios2/ejercicios2.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { Ejercicios3Component } from './ejercicios3/ejercicios3.component';
import { FetchJsonPipe } from './fetch-json.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FlyingHeroesPipe,
    Ejercicios1Component,
    Ejercicios2Component,
    ExponentialStrengthPipe,
    Ejercicios3Component,
    FetchJsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
