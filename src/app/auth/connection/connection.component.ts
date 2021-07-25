import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/User.model";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  userConnectionForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private userService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.userConnectionForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]]
    });
  }

  onSubmitForm() {
    const formValue = this.userConnectionForm.value;
    this.userService.connection(formValue['email'],formValue['password'])
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
