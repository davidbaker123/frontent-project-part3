import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TranslatedWord } from '../../shared/model/translated-word';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../../shared/model/category';

@Component({
  selector: 'app-end-of-game',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './end-of-game.component.html',
  styleUrl: './end-of-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndOfGameComponent implements OnInit {
[x: string]: any;
  failures: boolean[] = [];
  words: TranslatedWord[] = [];
  score: number = 0;
Math: any;
numSuccesses: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.failures = JSON.parse(params['failures']);
      this.words = JSON.parse(params['words']);
      this.score = params['score'];  // If you passed the score
    });
  }
}