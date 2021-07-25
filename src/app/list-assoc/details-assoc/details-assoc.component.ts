import { Component, OnInit } from '@angular/core';
import {CampModel} from "../../model/Camp.model";
import {CampService} from "../../service/camp.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationModel} from "../../model/Association.model";
import {AssocService} from "../../service/assoc.service";

@Component({
  selector: 'app-details-assoc',
  templateUrl: './details-assoc.component.html',
  styleUrls: ['./details-assoc.component.scss']
})
export class DetailsAssocComponent implements OnInit {

  assoc: AssociationModel;
  constructor(private assocService: AssocService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.assocService.getById(id).subscribe(
      (response)=>{
        this.assoc = response;
      },
      (err)=>{
        console.log("erreur ",err);
      }
    );
  }

  onMakeDonnation(id: number){
    this.router.navigate(['/donnation-assoc',id]);
  }

  onBack(){
    this.router.navigate(['/list-assoc']);
  }

  onHelp(id:number){
    this.router.navigate(['/help-assoc',id]);
  }
}
