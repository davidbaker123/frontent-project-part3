import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GameProfileService {
  private games: GameProfile[] = [
    {
      id: 1,
      name: 'word sorting',
      gameDescription: 'word sorting game',
      urlAddress: 'game1/:id'
    },
    {
      id: 2,
      name: 'word mess',
      gameDescription: 'word mess game',
      urlAddress: 'game2/:id'
    }
  ];

  constructor() {}

  getGames(): GameProfile[] {
    return this.games;
  }
}

export interface GameProfile {
  id: number;
  name: string;
  gameDescription: string;
  urlAddress: string;
}