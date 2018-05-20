import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { TicketsComponent } from './tickets/tickets.component';
import {MockService} from "./mock.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    HomeComponent,
    CourseComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [MockService],
  bootstrap: [
    AppComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
