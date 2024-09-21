import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../../shared/model/category';
import { GameProfile } from '../../shared/model/gameProfile';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-category-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './categoryDialog.component.html',
  styleUrl: './categoryDialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryDialogComponent {
  @Input()
  categories: Category[] = [];
  selectedCategory?: Category;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { game: GameProfile },
    private categoriesService: CategoriesService
  ) {
    this.categoriesService.list().then((result: Category[]) => {
      this.categories = result;
      this.onCategoryChange();
    });
  }
  onCategoryChange() {}
}
