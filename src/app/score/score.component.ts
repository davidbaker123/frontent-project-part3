import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent { 
  @Input() score: number = 0;

}
