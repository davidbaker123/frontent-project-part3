import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatedWord } from '../../shared/model/translated-word';

@Component({
  selector: 'app-end-of-game',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './end-of-game.component.html',
  styleUrl: './end-of-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndOfGameComponent {
@Input()  words : TranslatedWord[] = [];

 }
