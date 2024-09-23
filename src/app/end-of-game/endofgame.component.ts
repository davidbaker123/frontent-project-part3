import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { TranslatedWord } from '../../shared/model/translated-word';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExitIconComponent } from '../exit-icon/exit-icon.component';
import { MatTableModule } from '@angular/material/table';
import { GameResult } from '../../shared/model/game-result.';
import { GameHistoryService } from '../services/game-history.service';

@Component({
  selector: 'app-end-of-game',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    ExitIconComponent,
    MatTableModule,
  ],
  templateUrl: './endofgame.component.html',
  styleUrl: './endofgame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndOfGameComponent implements OnInit {
 words: TranslatedWord[] = [];
  failures: boolean[] = [];
  numSuccesses: number = 0;
  Math = Math;
  displayedColumns: string[] = ['origin', 'target', 'status'];
  categoryId: string = "";

  constructor(
    private route: ActivatedRoute,
    private gameHistoryService: GameHistoryService
  ) {}

  addGameToFirebase() {
   
      this.categoryId = localStorage.getItem("categoryId")!
      console.log('Game ID:', this.categoryId);
   
    const newGame: GameResult = {
      id: 'a',
      categoryId: this.categoryId,
      score: Math.ceil((100 * this.numSuccesses) / this.words.length),
      updateDate: new Date(),
    };

    this.gameHistoryService.add(newGame);
    console.log('gg');
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: { [x: string]: '' }) => {
      this.failures = JSON.parse(params['failures']);
      this.words = JSON.parse(params['words']);
      this.numSuccesses = this.failures.filter((val) => val === false).length;
    });
    this.addGameToFirebase();
  }
}
