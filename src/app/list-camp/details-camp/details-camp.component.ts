import { Component, OnInit } from '@angular/core';
import {CampModel} from "../../model/Camp.model";
import {CampService} from "../../service/camp.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-camp',
  templateUrl: './details-camp.component.html',
  styleUrls: ['./details-camp.component.scss']
})
export class DetailsCampComponent implements OnInit {

  camp: CampModel;
  constructor(private campService: CampService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.campService.getById(id).subscribe(
      (response)=>{
        this.camp = response;
      },
      (err)=>{
        console.log("erreur ",err);
      }
    );
  }

  onHelp(id: number){
    this.router.navigate(['/help-camp',id]);
  }

  onBack(){
    this.router.navigate(['/list-camp']);
  }

}
