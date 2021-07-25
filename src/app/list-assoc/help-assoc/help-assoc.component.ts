import { Component, OnInit } from '@angular/core';
import {CampService} from "../../service/camp.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FoodService} from "../../service/food.service";
import {MedocService} from "../../service/medoc.service";
import {ClothService} from "../../service/cloth.service";
import {UserModel} from "../../model/User.model";
import {FoodModel, TypeFood} from "../../model/Food.model";

@Component({
  selector: 'app-help-camp',
  templateUrl: './help-assoc.component.html',
  styleUrls: ['./help-assoc.component.scss']
})
export class HelpAssocComponent implements OnInit {
  typesFood: TypeFood[];

  foodForm: FormGroup;
  clothForm: FormGroup;
  medocsForm: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private foodService: FoodService,
              private medocsService: MedocService,
              private clothService: ClothService,
              private activeRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

    this.foodService.getAllType().subscribe(
      (res) => {
        this.typesFood = res ? res : [];
      },
      (err) => {

      }
    )
    this.initFormFood()
    this.initFormMedocs()
    this.initFormCloth()
  }

  initFormFood() {
    this.foodForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      typesFood: ['',[Validators.required]],
      expirationDate: ['',[Validators.required]]
    });
  }

  initFormMedocs() {
    this.medocsForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]],
      email: ['',[Validators.required,Validators.email]]
    });
  }

  initFormCloth() {
    this.clothForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]],
      email: ['',[Validators.required,Validators.email]]
    });
  }

  onSubmitFormFood() {

    const formValue = this.foodForm.value;
    const food = new FoodModel(formValue['name'],formValue['expirationDate'],formValue['typesFood'].id,this.activeRoute.snapshot.params['id'],parseInt(localStorage.getItem('token')))
    this.foodService.add(food).subscribe(
      ()=>{
        this.message = "nouriture ajoué"
      },
      (error) =>{
        this.message = error
      }
    )
   }

}
