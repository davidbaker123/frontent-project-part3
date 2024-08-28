import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-endofgame',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './endofgame.component.html',
  styleUrl: './endofgame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndofgameComponent { }
