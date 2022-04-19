import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



// @ts-ignore
import { PelerinComponent } from './models/pelerin'
import {FormsModule} from "@angular/forms";
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule} from "@angular/common/http";
import { PlanComponent } from './plan/plan.component';
import { ProgrammeComponent } from './programme/programme.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { VolComponent } from './vol/vol.component';
import { HotelComponent } from './hotel/hotel.component';
import {routingComponents} from "./app-routing.module";
import { BusComponent } from './bus/bus.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MenuComponent } from './menu/menu.component';
import { OffreComponent } from './offre/offre.component';
import { OffreCourtComponent } from './offre-court/offre-court.component';
import { OffreLongComponent } from './offre-long/offre-long.component';
import { ReserverComponent } from './reserver/reserver.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoiceComponent } from './invoice/invoice.component'; // a plugin!



// @ts-ignore


// @ts-ignore
@NgModule({

  declarations: [
    AppComponent,
    AuthentificationComponent,
    PlanComponent,
    ProgrammeComponent,
    VolComponent,
    HotelComponent,
    routingComponents,
    BusComponent,
    CalendrierComponent,
    MenuComponent,
    OffreComponent,
    OffreCourtComponent,
    OffreLongComponent,
    ReserverComponent,
    NavbarComponent,
    InvoiceComponent

  ],
  imports: [


    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path:'programme', component:ProgrammeComponent},{path:'plan',component:PlanComponent},{path:'authentification',component:AuthentificationComponent},{path:'vol',component:VolComponent},{path:'hotel',component:HotelComponent},{path:'bus',component:BusComponent},{path:'calendrier',component:CalendrierComponent},{path:'menu',component:MenuComponent},{path:'offre',component:OffreComponent},{path:'offrelong',component:OffreLongComponent},{path:'offrecourt',component:OffreCourtComponent},{path:'reserver',component:ReserverComponent}]),
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FullCalendarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
