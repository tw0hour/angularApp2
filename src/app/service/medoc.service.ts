import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedocModel} from "../model/Medoc.model";
import {Injectable} from "@angular/core";

@Injectable()
export class MedocService {
  private apiUrl = 'http://localhost:3000/medicament';

  constructor(private http: HttpClient) {
  }

  add(medoc: MedocModel):Observable<MedocModel> {
    return this.http.post<MedocModel>(this.apiUrl+'/',medoc);
  }
}
