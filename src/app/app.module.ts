import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component';
import { LocationComponent } from './location/location.component';

import { DataService } from './services/data.service';

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';

import { AgmCoreModule } from '@agm/core';
import { NewshopComponent } from './newshop/newshop.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DetailsComponent,
    LocationComponent,
    MainComponent,
    NewshopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATLWWUQTIBqxsqgoKO6H31Syl5b8wTet4'
    })
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
