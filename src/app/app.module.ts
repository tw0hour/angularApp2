import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './auth/connection/connection.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { ListCampComponent } from './list-camp/list-camp.component';
import { DetailsCampComponent } from './list-camp/details-camp/details-camp.component';
import { HelpCampComponent } from './list-camp/help-camp/help-camp.component';
import { ListDeliveryComponent } from './list-delivery/list-delivery.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/auth.service";
import {CampService} from "./service/camp.service";
import {DeliveryService} from "./service/delivery.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from "./service/authGuard.service";
import { ListAssocComponent } from './list-assoc/list-assoc.component';
import {AssocService} from "./service/assoc.service";
import { DetailsAssocComponent } from './list-assoc/details-assoc/details-assoc.component';
import { DonnationAssocComponent } from './list-assoc/donnation-assoc/donnation-assoc.component';
import {DonationService} from "./service/donation.service";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    ListCampComponent,
    DetailsCampComponent,
    HelpCampComponent,
    ListDeliveryComponent,
    NotFoundComponent,
    HeaderComponent,
    ListAssocComponent,
    DetailsAssocComponent,
    DonnationAssocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CampService,
    DeliveryService,
    DonationService,
    AssocService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
