export class RecipeModel{
   constructor(
      public name: string,
      public description: string,
      public userEmail: string,
      public userId: string,
      public ingredients?: Ingredients [],
      public id?: string
   ) {}
}

export class Ingredients {
   constructor (
      public name:string
   ) {}
}
