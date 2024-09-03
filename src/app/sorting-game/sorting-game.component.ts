import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { MatIconModule } from '@angular/material/icon';
import { ExitIconComponent } from "../exit-icon/exit-icon.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-game2',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, RouterLink, RouterModule,
    ExitIconComponent,MatProgressBarModule,
],
  templateUrl: './sorting-game.component.html',
  styleUrl: './sorting-game.component.css',
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
  exit(){}
}


 



