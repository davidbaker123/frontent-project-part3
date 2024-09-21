import { TranslatedWord } from './translated-word';

export class Category {
  lastUpdateDate = new Date();
  words: TranslatedWord[] = [];

  constructor(
    public id: string,
    public name: string,
    public origin: string,
    public target: string,
    lastModifiedDate?: Date 
  ) {
    this.lastUpdateDate = lastModifiedDate ? lastModifiedDate : new Date(); 
  }
}
