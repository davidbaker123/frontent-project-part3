import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-game1',
  standalone: true,
  imports: [
    CommonModule,RouterLink,RouterModule,MatToolbarModule,
  ],
  templateUrl: './game1.component.html',
  styleUrl: './game1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Game1Component implements OnInit {
  @Input()
  category?: Category;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.category = this.categoriesService.get(id);
  }
}
