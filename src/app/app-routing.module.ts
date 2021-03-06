import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectionComponent} from "./auth/connection/connection.component";
import {InscriptionComponent} from "./auth/inscription/inscription.component";
import {ListCampComponent} from "./list-camp/list-camp.component";
import {DetailsCampComponent} from "./list-camp/details-camp/details-camp.component";
import {HelpAssocComponent} from "./list-assoc/help-assoc/help-assoc.component";
import {AuthGuardService} from "./service/authGuard.service";
import {ListAssocComponent} from "./list-assoc/list-assoc.component";
import {DetailsAssocComponent} from "./list-assoc/details-assoc/details-assoc.component";
import {DonnationAssocComponent} from "./list-assoc/donnation-assoc/donnation-assoc.component";

const routes: Routes = [
  { path: 'connection', component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'list-camp', component: ListCampComponent },
  { path: 'details-camp/:id', component: DetailsCampComponent },
  { path: 'help-assoc/:id', canActivate: [AuthGuardService], component: HelpAssocComponent },
  { path: 'list-assoc', component: ListAssocComponent},
  { path: 'details-assoc/:id', component: DetailsAssocComponent },
  { path: 'help-assoc/:id', component: HelpAssocComponent },
  { path: 'donnation-assoc/:id', component: DonnationAssocComponent },
  { path: '', component: ListCampComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'list-camp' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
