import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExitIconComponent } from "../exit-icon/exit-icon.component";
import { CategoryFormComponent } from '../category-form/category-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-game2',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, RouterLink, RouterModule,
    ExitIconComponent,MatProgressBarModule,
],
  templateUrl: './game2.component.html',
  styleUrl: './game2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Game2Component implements OnInit {
[x: string]: any;
  @Input()
  category?: Category;
logout: any;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.category = this.categoriesService.get(id);
  }
  exit(){}
}


 



