import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UserModel} from "../model/User.model";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  private apiUrl = 'http://localhost:3000/volunteer';

  constructor(private http: HttpClient) {
  }

  inscription(user: UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(this.apiUrl+'/',user);
  }

  connection(email: string, password: string):Observable<UserModel>{
    return this.http.post<UserModel>(this.apiUrl+'/connection',{"email":email,"password":password});
  }

  logOut(){
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }

}
