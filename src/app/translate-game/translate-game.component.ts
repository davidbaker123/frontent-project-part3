import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../../shared/model/category';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-translate-game',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule,MatButtonModule,MatCardModule],
  templateUrl: './translate-game.component.html',
  styleUrl: './translate-game.component.css'
})
export class TranslateGameComponent {

  @Input() id: string = "0";
  currentCategory?: Category;
  message = "Your results will appear heare when you click check"
  incorrectGuesses: boolean[] = [];


  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    if (this.id) {
      this.currentCategory = this.categoriesService.get(parseInt(this.id));
    }
  }
  checkWords() {
    
    if(this.currentCategory){
      let correctGuesses = 0
      for (let i = 0; i < this.currentCategory.words.length; i++) {
        const word = this.currentCategory.words[i];
        if (word.target === word.guess) {
          correctGuesses++;
          this.incorrectGuesses.push(false); // Correct guess
        } else {

          this.incorrectGuesses.push(true); // Incorrect guess
        }
      }
      if(correctGuesses==this.currentCategory.words.length){
        this.message= "Well Done, You finished!!"
      }
      else{
        this.message= "You translated " +  correctGuesses + " words correctly, try again"
      }
    }
  }
}
