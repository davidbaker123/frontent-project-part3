import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-game2',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './game2.component.html',
  styleUrl: './game2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Game2Component implements OnInit {
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
