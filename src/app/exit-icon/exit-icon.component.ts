import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ExitDialogComponent } from "../exit-dialog/exit-dialog.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-icon',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, RouterLink, RouterModule,MatDialogModule,RouterModule,
    ExitDialogComponent
],
  templateUrl: './exit-icon.component.html',
  styleUrl: './exit-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExitIconComponent {

  constructor(private dialog: MatDialog, private router: Router) {}

  openExitDialog(): void {
    const dialogRef = this.dialog.open(ExitDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'primary') { 
        this.router.navigate(['/exit']); 
      }
    });
  }
}
