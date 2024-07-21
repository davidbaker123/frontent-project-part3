import { Category } from "./category";
import { Language } from "./language";
import { TranslatedWord } from "./translated-word";


export class GameProfile{
id:number;
name: string;
gameDescription: string;
urlAddress:string;

constructor(id: number,name:string,gameDescription:string,UrlAddress:string){
this.id = id;
this.name = name;
this.gameDescription = gameDescription;
this.urlAddress = UrlAddress;
}
}