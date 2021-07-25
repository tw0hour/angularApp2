export class FoodModel {
  constructor(public name:string, public expirationDate: string, public type_food_id:number,public association_id:number, public volunteer_id:number) {
  }
}

export class TypeFood {
  public id;
  constructor(public type:string) {
  }
}
