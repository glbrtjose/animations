import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule,MatButtonModule } from '@angular/material';
import { HammerCardComponent } from './hammer-card/hammer-card.component';
// import { HammertimeDirective } from './hammertime.directive';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammertimeDirective } from './hammertime.directive';


export class MyHammerConfig extends HammerGestureConfig{
  overrides=<any>{
    'swipe':{ direction: Hammer.DIRECTION_ALL }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HammerCardComponent,
    HammertimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [{
    provide:HAMMER_GESTURE_CONFIG,
    useClass:MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
