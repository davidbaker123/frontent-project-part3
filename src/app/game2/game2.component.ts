import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class Game2Component { }
