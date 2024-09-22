import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { CardsGameComponent } from "../cards-game/cards-game.component";
import { GameHistoryService } from "../services/game-history.service";
import { GameResult } from "../../shared/model/game-result.";


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
export class GameResultComponent implements OnInit {

  constructor(
    private gameHistoryService: GameHistoryService
  ) {}
  games : GameResult[]= []
  cardsNumOfGames = 10;
  cardsNum0fPoints = 8;
  cardsNumOfCategories = 5;
  cardsPercent = 3;
  cardsDaysStrike = 2;
  cardsMonthlyGame = 1;
  cardsName = 'Mix letters';

  ngOnInit() {
    this.gameHistoryService.list().then((result)=>{
      console.log(result)
      this.games = result;
    })
    this.CountGames();
  }

  CountGames(){
    const count = this.games.length;
    console.log(this.games , count)
  }
 }