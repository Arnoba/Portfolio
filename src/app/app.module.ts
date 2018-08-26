import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './components/layout/header';
import { FooterModule } from './components/layout/footer';
import { AppRoutingModule } from './app-routing.module';
import { BodyModule } from './components/layout/body';
import { FormsModule } from '../../node_modules/@angular/forms';



@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    BodyModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
