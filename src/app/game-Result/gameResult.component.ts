import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CardsGameComponent } from '../cards-game/cards-game.component';
import { GameHistoryService } from '../services/game-history.service';
import { GameResult } from '../../shared/model/game-result.';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-game-result',
  standalone: true,
  imports: [CommonModule, CardsGameComponent],
  templateUrl: './gameResult.component.html',
  styleUrl: './gameResult.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameResultComponent implements OnInit {
  games: GameResult[] = [];
  cardsNumOfGames: number = 0;
  cardsNum0fPoints: number = 0;
  cardsNumOfCategories: number = 0;
  cardsPercent: number = 0;
  cardsDaysStrike: number = 0;
  cardsMonthlyGame = 1;
  cardsPercentCategory = 0;
  cardsNotPlayed = 0;
  cardsMostPlayed: string = '';

  constructor(
    private gameHistoryService: GameHistoryService,
    private categoryService: CategoriesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.gameHistoryService.list().then((result) => {
      this.games = result;
      this.CountGames();
      this.GetPoints();
      this.CheckCountCategories();
      this.CheckCount100();
      this.findMostFrequentCategoryId();
      this.CheckNotPlayed();
      this.countConsecutiveDays();
      this.countGamesPlayedLastMonth()
    });
  }

  CountGames() {
    const count = this.games.length;
    this.cardsNumOfGames = count;
    this.cdr.detectChanges();
  }

  GetPoints() {
    const totalScore = this.games.reduce((accumulator, currentGame) => {
      return accumulator + currentGame.score;
    }, 0);
    this.cardsNum0fPoints = totalScore;
    this.cdr.detectChanges();
  }

  CheckCount100() {
    const gamesWithPerfectScore = this.games.filter(
      (game) => game.score === 100
    ).length;
    const percentage = (gamesWithPerfectScore / this.games.length) * 100;
    this.cardsPercent = Math.floor (percentage);
    this.cdr.detectChanges();
  }

  CheckCountCategories() {
    const categoryIds = this.games.map((game) => game.categoryId);
    const uniqueCategoryIds = new Set(categoryIds);
    const uniqueCategoryCount = uniqueCategoryIds.size;
    this.cardsNumOfCategories = uniqueCategoryCount;
    this.cdr.detectChanges();
  }

  findMostFrequentCategoryId() {
    const categoryCount = new Map<string, number>();
    this.games.forEach((game) => {
      const categoryId: string = game.categoryId;
      categoryCount.set(categoryId, (categoryCount.get(categoryId) || 0) + 1);
    });
    let mostFrequentCategoryId = '';
    categoryCount.forEach((count, categoryId) => {
      let mostFrequentCategoryCount = 0;
      if (count > mostFrequentCategoryCount) {
        mostFrequentCategoryCount = count;
        mostFrequentCategoryId = categoryId;
      }
    });
    this.categoryService.get(mostFrequentCategoryId).then((result) => {
      this.cardsMostPlayed = result!.name;
      this.cdr.detectChanges();
    });
  }
  CheckNotPlayed() {
    this.categoryService.list().then((result) => {
      this.cardsNotPlayed = result.length - this.cardsNumOfCategories;
      this.cardsPercentCategory =
       Math.ceil ((this.cardsNumOfCategories / result.length) * 100);
      this.cdr.detectChanges();
    });
  }
  countConsecutiveDays() {
    const dateSet = new Set(
      this.games.map((game) => new Date(game.updateDate).toDateString())
    );
    const datesArray = Array.from(dateSet).map((date) => new Date(date));
    datesArray.sort((a, b) => a.getTime() - b.getTime()); 
    let count = 0;
    let previousDate = null;
    for (const currentDate of datesArray) {
      if (previousDate) {
        const difference =
          (currentDate.getTime() - previousDate.getTime()) / (1000 * 3600 * 24);
        if (difference === 1) {
          count++;
        } else if (difference > 1) {
          break; 
        }
      }
      previousDate = currentDate;
    }
    this.cardsDaysStrike = count + 1;
    this.cdr.detectChanges();
  }
  countGamesPlayedLastMonth() {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1); 
    this.cardsMonthlyGame = this.games.filter(
      (game) => new Date(game.updateDate) >= oneMonthAgo
    ).length;
    this.cdr.detectChanges();
  }
}
