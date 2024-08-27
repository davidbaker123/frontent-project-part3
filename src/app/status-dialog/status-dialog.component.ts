import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-dialog',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './status-dialog.component.html',
  styleUrl: './status-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusDialogComponent { 
  @Input() message: string = '';
  @Input() isSuccess: boolean = true;
}
