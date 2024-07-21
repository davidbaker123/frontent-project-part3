import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { matTooltipAnimations } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    CommonModule,RouterModule,MatToolbarModule,
  ],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpComponent { }
