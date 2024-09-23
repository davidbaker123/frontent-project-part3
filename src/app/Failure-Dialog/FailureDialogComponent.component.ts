import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-failure-dialog-component',
  standalone: true,
  imports: [
    CommonModule,MatDialogModule,MatButtonModule,
  ],
  templateUrl: './FailureDialogComponent.component.html',
  styleUrl: './FailureDialogComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FailureDialogComponentComponent { }
