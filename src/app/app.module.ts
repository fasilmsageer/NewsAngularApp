import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { HttpClientModule } from '@angular/common/http';

const myRoute=[
  {
    path:"",
    component:ViewNewsComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
