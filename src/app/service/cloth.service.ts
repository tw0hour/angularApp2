import {HttpClient} from "@angular/common/http";import {MedocModel} from "../model/Medoc.model";
import {Observable} from "rxjs";
import {ClotheModel, GenderCloth, TypeCloth} from "../model/Clothe.model";
import {Injectable} from "@angular/core";

@Injectable()
export class ClothService {
  typeClothes: TypeCloth[];
  private apiUrlCloth = 'http://localhost:3000/cloth';
  private apiUrlTypeCloth = 'http://localhost:3000/typeCloth';
  private apiUrlGenderCloth = 'http://localhost:3000/genderCloth';

  constructor(private http: HttpClient) {
  }

  add(cloth: ClotheModel):Observable<ClotheModel> {
    return this.http.post<ClotheModel>(this.apiUrlCloth+'/',cloth);
  }

  getAllType():Observable<TypeCloth[]> {
    return this.http.get<TypeCloth[]>(this.apiUrlTypeCloth+'/');
  }

  getAllGender():Observable<GenderCloth[]> {
    return this.http.get<GenderCloth[]>(this.apiUrlGenderCloth+'/');
  }

}
