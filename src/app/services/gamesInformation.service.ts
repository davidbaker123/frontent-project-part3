import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/gameProfile';


@Injectable({
  providedIn: 'root'
})
export class GameProfileService {
  private games: GameProfile[] = [
    new GameProfile(1, 'Mixed Letters', 'for each word from the category there will be shown the meaning in hebrew and the english word letters in a messed order. the user has to rearrange the letters in the correct order', 'mixed-letters-game/:id'),
    new GameProfile(2, 'Word Sorting', 'for each word the player has to choose wheter it belongs to the category or not', 'sorting-game/:id')
  ];

  constructor() {}

  getGames(): GameProfile[] {
    return this.games;
  }
}

