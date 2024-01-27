import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../services/categories.service';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Category } from '../../shared/model/category';

@Component({
  selector: 'app-category-list-for-game',
  standalone: true,
  imports: [CommonModule,RouterModule,MatButtonModule],
  templateUrl: './category-list-for-game.component.html',
  styleUrl: './category-list-for-game.component.css'
})
export class CategoryListForGameComponent {

  categoryList:Category [] = [];
  constructor(private categoriesService : CategoriesService) {}
  ngOnInit(): void {
    this.categoryList = this.categoriesService.list();
  }

}
