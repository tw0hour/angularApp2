import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './auth/connection/connection.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { ListCampComponent } from './list-camp/list-camp.component';
import { DetailsCampComponent } from './list-camp/details-camp/details-camp.component';
import { HelpAssocComponent } from './list-assoc/help-assoc/help-assoc.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/auth.service";
import {CampService} from "./service/camp.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from "./service/authGuard.service";
import { ListAssocComponent } from './list-assoc/list-assoc.component';
import {AssocService} from "./service/assoc.service";
import { DetailsAssocComponent } from './list-assoc/details-assoc/details-assoc.component';
import { DonnationAssocComponent } from './list-assoc/donnation-assoc/donnation-assoc.component';
import {DonationService} from "./service/donation.service";
import {FoodService} from "./service/food.service";
import {ClothService} from "./service/cloth.service";
import {MedocService} from "./service/medoc.service";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    ListCampComponent,
    DetailsCampComponent,
    HelpAssocComponent,
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
    DonationService,
    AssocService,
    FoodService,
    ClothService,
    MedocService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
