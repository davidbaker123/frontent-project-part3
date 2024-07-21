import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';

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
export class Game1Component {
  
 }
