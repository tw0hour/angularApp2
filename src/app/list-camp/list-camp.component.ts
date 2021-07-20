import { Component, OnInit } from '@angular/core';
import {CampService} from "../service/camp.service";
import {CampModel} from "../model/Camp.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-camp',
  templateUrl: './list-camp.component.html',
  styleUrls: ['./list-camp.component.scss']
})
export class ListCampComponent implements OnInit {

  camps: CampModel[];

  constructor(private campService: CampService,
              private router: Router) { }

  ngOnInit(): void {
    this.campService.getAll().subscribe(
      (responses)=>{
        this.camps = responses ? responses : [];
      }
    );
  }

  onDetailsCamp(id: number){
    this.router.navigate(['details-camp',id]);
  }

}
