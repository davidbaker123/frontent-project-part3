import { GameProfileService } from './../services/gamesInformation.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit,  } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { ExitIconComponent } from '../exit-icon/exit-icon.component';
import { TranslatedWord } from '../../shared/model/translated-word';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ExitDialogComponent } from '../exit-dialog/exit-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-game1',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    MatToolbarModule,
    ExitIconComponent,
    ExitDialogComponent,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule, 
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,

  ],
  templateUrl: './game1.component.html',
  styleUrl: './game1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Game1Component implements OnInit {
  @Input()
  category?: Category;
  words : TranslatedWord[] = [];
  index = -1;
  mixWord = '';
  tryCount: number = 0;
  numSuccess:  number = 0;
  gamePoint: number = 0;

  

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.category = this.categoriesService.get(id);
    this.words = [new TranslatedWord('apple','תפוח'),new TranslatedWord('banana','בננה')]
    this.nextWord();
  }

nextWord() {
      if (this.words && this.index < this.words.length - 1) {
        this.index++;
        this.mixWord = [...this.words[this.index]['origin']]
          .sort(() => Math.random() - 0.5)
          .join(' ');
         //TODO:(valid target word) while(this.mixWord===this.words[this.index]['origin']){
          //   this.mixWord = [...this.words[this.index]['origin']]
          //   .sort(() => Math.random() - 0.5)
          //   .join(' ');
          // }
      }
      
    }
    submit(){
          this.tryCount++;
          const currentWord = this.words[this.index];
          const isSuccess = currentWord?.['guess'] === currentWord ['origin']
          const isEndOfGame = this.index +1 === this.words?.length;
          if(!isEndOfGame){
            // this.dialogService.open(DialogMatchGameComponent,){
            //   data: isSuccess,
            // });
            if(isSuccess){
              alert('succes!')
              this.numSuccess++;
              this.nextWord();
            }else{
              alert('failed!')
              this.gamePoint -= 2;
            }
          }else{
            alert('finish');
            this.router.navigate(['endofgame'],{ queryParams: { data: [{target:'AAA'}] } });
          }
        }
        reset(){
    if(this.words){
      console.log(this.words);
      this.words[this.index].guess = '';
      console.log(this.words);
    } 
  }
  }

    // calculateProgress(): number{
//   const totalWords = this.word?.lenght || 0;
//   const guessedWordsRatio = this.numSuccess / totalWords;
//   const progress = Math.max(guessedWordsRatio,categoryProgressRatio) * 100;
//   return progress;
// }






// export class MixedWordsComponent implements OnInit {
//   isLoading = true;
//   @Input() idCategory: string = '';
//   category: Category | undefined;
//   words?: TranslatedWord[];
//   index = -1;
//   mixWord = '';
//   numSuccess = 0;
//   endGame = false;
//   tryCount = 0;
//   gamePoints = 0;
//   grade = 0;
//   gameDuration = 0;
//   displayTimeLeft: string = '';

//   @ViewChild('timerComponent') timerComponent!: TimerComponent;

//   constructor(
//     private categoryService: CategoriesService,
//     private dialogService: MatDialog,
//     private gamePlayerDifficultyService: GamePlayerDifficultyService,
//     private gameManagerService: GameManagerService
//   ) {}

//   ngOnInit() {
//     this.startNewGame();
//     this.gameDuration = this.gameManagerService.getGameDuration(
//       GameDifficulty.HARD
//     );
//   }
  
//   nextWord() {
//     if (this.words && this.index < this.words.length - 1) {
//       this.index++;
//       this.mixWord = [...this.words[this.index]['origin']]
//         .sort(() => Math.random() - 0.5)
//         .join(' ');
//     }
//   }
//   reset(){
//     if(this.words) this.words[this.index].guess = '';
//   }

//   submit(){
//     this.tryCount++;
//     const currentWord = this.words && this.words[this.index];
//     const isSuccess = currentWord?.['guess'] === currentWord?.[]
//     const isEndOfGame = this.index +1 === this.words?.length;
//     if(!isEndOfGame){
//       this.dialogService.open(DialogMatchGameComponent,){
//         data: isSuccess,
//       });
    
//       if(isSuccess){
//         this.numSuccess++;
//       }else{
//         this.gamePoint -= 2;
//       }
//     }
//   }
// if(isEndOfGame){
//   const game: gamePlayed = {
//     date: newDate(),
//     isCategory: this.idCategory,
//     numOfPoints: this.gamePoints,
//     secondLeftInGame: this.timerComponent.getTimeLeft(),
//     secoundPlayed: this.gameDuration - this.timerComponent.getTimeLeft(),
//   };
//   this.gamePlayedDifficultyServices.addGamePlayed(game).then(()=>{
//   });
// }else{
// this.nextWord();
// this.reset()
// }
// }
// exit(){
//   this.dialogService.open(ExitGameComponet);
// }

// calculateProgress(): number{
//   const totalWords = this.word?.lenght || 0;
//   const guessedWordsRatio = this.numSuccess / totalWords;
//   const progress = Math.max(guessedWordsRatio,categoryProgressRatio) * 100;
//   return progress;
// }

// startNewGame(){
// this.isLoading=true;
// this.index = -1;
// this.numSuccess = 0;
// this.endGame = false;
// this.tryCount = 0;
// this.gamePoints = 16;
// this.categoryService.get(this.idCategory).then((res)=>{
//   this.category = res;
//   this.words = this.category?.['word'];
// })
// }