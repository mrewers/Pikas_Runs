import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';

import { RunsService } from './shared';

import { AppComponent } from './app.component';
import { RunsComponent } from './runs/runs.component';
import { RunsListComponent } from './runs/runs-list/runs-list.component';
import { RunDetailComponent } from './runs/run-detail/run-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, RunsComponent, RunsListComponent, RunDetailComponent],
  imports: [BrowserAnimationsModule, BrowserModule, AppMaterialModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [RunsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
