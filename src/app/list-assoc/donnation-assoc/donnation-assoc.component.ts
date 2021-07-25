import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DonationService} from "../../service/donation.service";
import {DonnationModel} from "../../model/Donnation.model";

@Component({
  selector: 'app-donnation-assoc',
  templateUrl: './donnation-assoc.component.html',
  styleUrls: ['./donnation-assoc.component.scss']
})
export class DonnationAssocComponent implements OnInit {

  private idAssoc:number
  donnationForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private donnationService: DonationService,
              private activeRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.idAssoc = this.activeRoute.snapshot.params['id'];
    this.initForm()
  }

  initForm() {
    this.donnationForm = this.formBuilder.group({
      amount_given: ['',[Validators.required]]
    });
  }

  onSubmitForm() {
    const formValue = this.donnationForm.value;
    const donation = new DonnationModel(formValue['amount_given'],this.idAssoc,parseInt(localStorage.getItem("token")),"02/06/2015")
    this.donnationService.add(donation)
      .subscribe(
        (userR)=>{
          this.router.navigate(['/details-assoc',this.idAssoc]);
        },
        (error)=>{
          console.log(error);
          this.errorMessage = error.error.error;
        }
      );
  }

}
