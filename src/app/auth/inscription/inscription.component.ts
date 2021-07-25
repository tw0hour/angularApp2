import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../model/User.model";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  userInscriptionForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private userService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.userInscriptionForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]],
      email: ['',[Validators.required,Validators.email]]
    });
  }

  onSubmitForm() {
    const formValue = this.userInscriptionForm.value;
    const newUser = new UserModel(
      formValue['name'],
      formValue['password'],
      formValue['email'],
      "normal"
    );

    this.userService.inscription(newUser)
      .subscribe(
        (userR)=>{
          console.log(userR);
          localStorage.setItem('isLoggedIn','true');
          localStorage.setItem('token',userR.id.toString());
          this.router.navigate(['/list-camp']);
          console.log(localStorage.getItem('isLoggedIn'));
        },
        (error)=>{
          console.log(error);
          this.errorMessage = error.error.error;
        }
      );
  }

}
