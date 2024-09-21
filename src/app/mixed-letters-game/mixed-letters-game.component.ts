import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { ExitIconComponent } from '../exit-icon/exit-icon.component';
import { TranslatedWord } from '../../shared/model/translated-word';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ExitDialogComponent } from '../exit-dialog/exit-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SuccessDialogComponentComponent } from '../SuccessDialogComponent/SuccessDialogComponent.component';
import { FailureDialogComponentComponent } from '../FailureDialogComponent/FailureDialogComponent.component';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-mixed-letters-game',
  standalone: true,
  imports: [
    CommonModule,
    ExitIconComponent,
    ExitDialogComponent,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    SuccessDialogComponentComponent,
    FailureDialogComponentComponent,
    ScoreComponent,
  ],
  templateUrl: './mixed-letters-game.component.html',
  styleUrl: './mixed-letters-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Game1Component implements OnInit {
  category?: Category;
  words: TranslatedWord[] = [];
  currentIndex: number = 0;
  currentGuess: string = '';
  mixedWord: string = '';
  totalWords: number = 0;
  failures: boolean[] = [];
  score: number = 0;
  pointsPerWord: number = 0;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.categoriesService.get(id).then((category) => {
      if (category) {
        this.category = category;
        this.words = category.words;
        this.totalWords = this.words.length;
        this.failures = new Array(this.totalWords).fill(false);
        this.pointsPerWord = 100 / this.totalWords;
        this.nextWord();
      }
    });
  }

  nextWord() {
    if (this.currentIndex < this.words.length) {
      do {
        this.mixedWord = this.shuffle(this.words[this.currentIndex].origin);
      } while (this.mixedWord === this.words[this.currentIndex].origin);
    } else {
      console.log(this.failures);
      this.router.navigate(['endofgame'], {
        queryParams: {
          failures: JSON.stringify(this.failures),
          words: JSON.stringify(this.words),
        },
      });
    }
  }

  shuffle(word: string): string {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  }

  submit() {
    if (
      this.currentGuess.toLowerCase() ===
      this.words[this.currentIndex].origin.toLowerCase()
    ) {
      this.dialog
        .open(SuccessDialogComponentComponent)
        .afterClosed()
        .subscribe(() => {});
      this.currentIndex++;
      this.currentGuess = '';
      this.nextWord();
      this.score = Math.floor(this.score + this.pointsPerWord);
    } else {
      this.dialog
        .open(FailureDialogComponentComponent)
        .afterClosed()
        .subscribe(() => {});
      this.failures[this.currentIndex] = true;
      this.currentIndex++;
      this.currentGuess = '';
      this.nextWord();
    }
  }

  reset() {
    this.currentGuess = '';
  }

  get progressPercentage(): number {
    return (this.currentIndex / this.totalWords) * 100;
  }
}
