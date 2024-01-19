import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './delete-category-dialog.component.html',
  styleUrl: './delete-category-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCategoryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public categoryName : string){}
 }
