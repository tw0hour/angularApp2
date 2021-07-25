import { Component, OnInit } from '@angular/core';
import {CampModel} from "../model/Camp.model";
import {CampService} from "../service/camp.service";
import {Router} from "@angular/router";
import {AssocService} from "../service/assoc.service";
import {AssociationModel} from "../model/Association.model";

@Component({
  selector: 'app-list-assoc',
  templateUrl: './list-assoc.component.html',
  styleUrls: ['./list-assoc.component.scss']
})
export class ListAssocComponent implements OnInit {

  assocs: AssociationModel[];

  constructor(private assocService: AssocService,
              private router: Router) { }

  ngOnInit(): void {
    this.assocService.getAll().subscribe(
      (responses)=>{
        this.assocs = responses ? responses : [];
      }
    );
  }

  onDetailsAssoc(id: number){
    this.router.navigate(['details-assoc',id]);
  }

}
