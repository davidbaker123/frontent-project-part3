import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/gameProfile';


@Injectable({
  providedIn: 'root'
})
export class GameProfileService {
  private games: GameProfile[] = [
    new GameProfile(1, 'Word Sorting', 'Word sorting game', 'game1/:id'),
    new GameProfile(2, 'Word Mess', 'Word mess game', 'game2/:id')
  ];

  constructor() {}

  getGames(): GameProfile[] {
    return this.games;
  }
}