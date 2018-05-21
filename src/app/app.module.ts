import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RunsService } from './shared';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RunsComponent } from './runs/runs.component';
import { RunDetailComponent } from './runs/run-detail/run-detail.component';
import { RunsListComponent } from './runs/runs-list/runs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CalendarComponent,
    HomeComponent,
    ProfileComponent,
    RunsComponent,
    RunDetailComponent,
    RunsListComponent
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule.forRoot(),
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [RunsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
