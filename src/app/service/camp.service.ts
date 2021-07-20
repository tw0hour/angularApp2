import {CampModel} from "../model/Camp.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class CampService {

  camps: CampModel[];
  private apiUrl = 'http://localhost:3000/camp';

  constructor(private http: HttpClient) {
  }

  getAll():Observable<CampModel[]> {
    return this.http.get<CampModel[]>(this.apiUrl+'/');
  }

  getById(id:number):Observable<CampModel>{
    return this.http.get<CampModel>(this.apiUrl+'/'+id);
  }
}
