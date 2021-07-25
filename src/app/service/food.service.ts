import {ClotheModel} from "../model/Clothe.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {FoodModel, TypeFood} from "../model/Food.model";

@Injectable()
export class FoodService {

  private apiUrlFood = 'http://localhost:3000/food';
  private apiUrlTypeFood = 'http://localhost:3000/typeFood';

  constructor(private http: HttpClient) {
  }

  add(food: FoodModel):Observable<FoodModel> {
    return this.http.post<FoodModel>(this.apiUrlFood+'/',food);
  }

  getAllType():Observable<TypeFood[]> {
    return this.http.get<TypeFood[]>(this.apiUrlTypeFood+'/');
  }
}
