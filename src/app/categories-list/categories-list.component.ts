import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { categories } from '../../shared/data/categories';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatIconModule, MatButtonModule, RouterModule
  ],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'numOfWords', 'lastUpdateDate', 'actions'];
  dataSource : Category[] = [];

  constructor(private categoriesService : CategoriesService) {}

  ngOnInit(): void {
    this.dataSource = this.categoriesService.list();
  }
}
