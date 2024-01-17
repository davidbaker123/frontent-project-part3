import { CategoriesService } from './../services/categories.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../../shared/model/language';
import { Category } from '../../shared/model/category';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent implements OnInit { 
  currentCategory = new Category(0,"", Language.English, Language.Hebrew);
  originWord = '';
  targetWord = '';
  displayedColumns: string[] = ["Origin", "Target", "Actions"];

  @Input()
  id? : string;

  constructor(private categoriesService : CategoriesService,
    private router : Router){}

  ngOnInit(): void {
    if (this.id) {
      let categoryData = this.categoriesService.get(parseInt(this.id)); 

      if (categoryData) {
        this.currentCategory = categoryData;
      }
    }
  }

  addWord() {
    this.currentCategory.words.set(this.originWord, this.targetWord);
    this.originWord = '';
    this.targetWord = '';
  }

  deleteWord(origin : string) {
    this.currentCategory.words.delete(origin);
  }

  saveCategory() {
    if (this.id) {
      this.categoriesService.update(this.currentCategory);
    } else {
      this.categoriesService.add(this.currentCategory);
    }

    this.router.navigate(['']);
  }
}
