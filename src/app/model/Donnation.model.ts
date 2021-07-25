export class DonnationModel {
  id:number;
  constructor(public amountGiven:number,public association_id: number, public volunteer_id: number,public date:string) {
  }
}
