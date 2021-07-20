import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectionComponent} from "./auth/connection/connection.component";
import {InscriptionComponent} from "./auth/inscription/inscription.component";
import {ListCampComponent} from "./list-camp/list-camp.component";
import {DetailsCampComponent} from "./list-camp/details-camp/details-camp.component";
import {HelpCampComponent} from "./list-camp/help-camp/help-camp.component";
import {ListDeliveryComponent} from "./list-delivery/list-delivery.component";
import {AuthGuardService} from "./service/authGuard.service";
import {ListAssocComponent} from "./list-assoc/list-assoc.component";

const routes: Routes = [
  { path: 'connection', component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'list-camp', component: ListCampComponent },
  { path: 'details-camp/:id', component: DetailsCampComponent },
  { path: 'help-camp/:id', canActivate: [AuthGuardService], component: HelpCampComponent },
  {path: 'list-delivery', canActivate: [AuthGuardService], component: ListDeliveryComponent },
  {path: 'list-assoc', component: ListAssocComponent},
  { path: '', component: ListCampComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'list-camp' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
