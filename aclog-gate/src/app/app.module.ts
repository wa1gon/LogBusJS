
import { WelcomeComponent } from './home/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdButtonModule, MdCheckboxModule, MdMenuModule,
  MdIconModule, MdToolbarModule, MdInputModule, MdInputContainer, MdSelectModule
} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { ListLogComponent } from './list-log/list-log.component';
import { LogContactComponent } from './log-contact/log-contact.component';
import { StaticDataService } from './services/static-data/static-data.service';


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listlog', component: ListLogComponent },
  { path: 'addContact', component: LogContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ListLogComponent,
    LogContactComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [StaticDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
