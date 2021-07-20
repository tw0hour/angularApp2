export class DeliveryModel {
  // constructor(public id: number,
  //             public date: string,
  //             public foods?: Food[],
  //             public medocs?: Medoc[],
  //             public clothes?: Clothe[]) {
  // }
  constructor(public id:number,public status:string) {
  }
}

export class Food {
  constructor(public name: string, public number:number) {
  }
}

export class Medoc {
  constructor(public name: string, public number:number) {
  }
}
export class Clothe {
  constructor(public name: string, public gender: boolean, public number:number) {
  }
}
