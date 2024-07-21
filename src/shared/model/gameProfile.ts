import { Category } from "./category";
import { Language } from "./language";
import { TranslatedWord } from "./translated-word";


export class GameProfile {
    constructor(
      public id: number,
      public name: string,
      public gameDescription: string,
      public urlAddress: string
    ) {}
  }