import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AssociationModel} from "../model/Association.model";
import {Injectable} from "@angular/core";

@Injectable()
export class AssocService {
  assoc: AssociationModel[];
  private apiUrl = 'http://localhost:3000/association';

  constructor(private http: HttpClient) {
  }

  getAll():Observable<AssociationModel[]> {
    return this.http.get<AssociationModel[]>(this.apiUrl+'/');
  }

  getById(id:number):Observable<AssociationModel>{
    return this.http.get<AssociationModel>(this.apiUrl+'/'+id);
  }
}
