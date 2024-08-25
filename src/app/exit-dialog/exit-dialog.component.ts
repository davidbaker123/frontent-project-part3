import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-exit-dialog',
  standalone: true,
  imports: [
    CommonModule,MatDialogModule,MatFormFieldModule,MatButtonModule,MatSelectModule,
  ],
  templateUrl: './exit-dialog.component.html',
  styleUrl: './exit-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExitDialogComponent { }
