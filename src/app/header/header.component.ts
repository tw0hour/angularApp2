import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _isAuth: boolean;


  get isAuth(): boolean {
    this._isAuth = localStorage.getItem('isLoggedIn') == 'true';
    return this._isAuth;
  }

  constructor(private authService: AuthService) {
    console.log(localStorage.getItem('isLoggedIn'))
  }

  ngOnInit(): void {

  }

  onSignOut(){
    this.authService.logOut();
  }

}
