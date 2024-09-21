import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component , Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cards-game',
  standalone: true,
  imports: [
    CommonModule, MatCardModule
  ],
  templateUrl: './cards-game.component.html',
  styleUrl: './cards-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsGameComponent { 
  @Input() cardsNum?:number | string;
  @Input() cardsDescription?:string;

}