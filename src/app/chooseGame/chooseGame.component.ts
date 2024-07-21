import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatCard, MatCardActions, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-choose-game',
  standalone: true,
  imports: [
    CommonModule,RouterModule,MatToolbarModule,MatButtonModule, MatCardModule,
  ],
  templateUrl: './chooseGame.component.html',
  styleUrl: './chooseGame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseGameComponent { }
