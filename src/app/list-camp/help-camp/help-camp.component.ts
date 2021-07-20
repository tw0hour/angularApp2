import { Component, OnInit } from '@angular/core';
import {CampService} from "../../service/camp.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeliveryService} from "../../service/delivery.service";

@Component({
  selector: 'app-help-camp',
  templateUrl: './help-camp.component.html',
  styleUrls: ['./help-camp.component.scss']
})
export class HelpCampComponent implements OnInit {

  helpCampForm: FormGroup;
  constructor(private deliveryService: DeliveryService,
              private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  initForm() {
    this.helpCampForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]],
      email: ['',[Validators.required,Validators.email]],
      foods: this.formBuilder.array([]),
      clothes: this.formBuilder.array([]),
      medocs: this.formBuilder.array([])
    });
  }

  onSubmit(){

  }
  onAddFoods() {
    const newFoodControl = this.formBuilder.control(null, Validators.required);
    this.getFoods().push(newFoodControl);
  }

  getFoods(): FormArray {
    return this.helpCampForm.get('foods') as FormArray;
  }

  onAddClothes() {
    const newClothControl = this.formBuilder.control(null, Validators.required);
    this.getClothes().push(newClothControl);
  }

  getClothes(): FormArray {
    return this.helpCampForm.get('clothes') as FormArray;
  }

  onAddMedocs() {
    const newMedocsControl = this.formBuilder.control(null, Validators.required);
    this.getMedocs().push(newMedocsControl);
  }

  getMedocs(): FormArray {
    return this.helpCampForm.get('medocs') as FormArray;
  }
}
