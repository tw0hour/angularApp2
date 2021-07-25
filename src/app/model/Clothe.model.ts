export class ClotheModel {
  constructor(public name:string, public size:number, public type_cloth_id:number, public gender_cloth_id:number) {
  }
}

export class TypeCloth {
  private id;
  constructor(public type:string) {
  }
}

export class GenderCloth {
  private id;
  constructor(public type:string) {
  }
}
