import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog-component',
  standalone: true,
  imports: [
    CommonModule,MatDialogModule,MatButtonModule,
  ],
  templateUrl: './SuccessDialogComponent.component.html',
  styleUrl: './SuccessDialogComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessDialogComponentComponent { }
