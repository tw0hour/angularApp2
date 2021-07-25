import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DonnationModel} from "../model/Donnation.model";
import {Injectable} from "@angular/core";

@Injectable()
export class DonationService {
  private apiUrl = 'http://localhost:3000/donation';

  constructor(private http: HttpClient) {
  }

  add(donnation: DonnationModel):Observable<DonnationModel> {
    return this.http.post<DonnationModel>(this.apiUrl+'/',donnation);
  }
}
