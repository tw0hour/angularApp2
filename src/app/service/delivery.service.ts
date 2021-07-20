import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeliveryModel} from "../model/Delivery.model";
import {Injectable} from "@angular/core";

@Injectable()
export class DeliveryService {
  delivery: DeliveryModel[];
  private apiUrl = 'http://localhost:3000/camp';

  constructor(private http: HttpClient) {
  }

  getAll():Observable<DeliveryModel[]> {
    return this.http.get<DeliveryModel[]>(this.apiUrl+'/');
  }

  getById(id:number):Observable<DeliveryModel>{
    return this.http.get<DeliveryModel>(this.apiUrl+'/'+id);
  }
}
