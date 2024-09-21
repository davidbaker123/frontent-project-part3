import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CardsGameComponent } from "../cards-game/cards-game.component";


@Component({
  selector: 'app-game-result',
  standalone: true,
  imports: [
    CommonModule,
    CardsGameComponent
],
  templateUrl: './gameResult.component.html',
  styleUrl: './gameResult.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameResultComponent {
  cardsNumOfGames = 10;
  cardsNum0fPoints = 8;
  cardsNumOfCategories = 5;
  cardsPercent = 3;
  cardsDaysStrike = 2;
  cardsMonthlyGame = 1;
  cardsName = 'Mix letters';

  
 }