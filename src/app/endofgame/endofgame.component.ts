import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TranslatedWord } from '../../shared/model/translated-word';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExitIconComponent } from "../exit-icon/exit-icon.component";
import { MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-end-of-game',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    ExitIconComponent,
    MatTableModule,
],
  templateUrl: './endofgame.component.html',
  styleUrl: './endofgame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndOfGameComponent implements OnInit {
  @Input() words: TranslatedWord[] = [];
  failures: boolean[] = [];
  numSuccesses: number = 0;
  Math = Math;
  displayedColumns: string[] = ['origin', 'target', 'status'];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    this.route.queryParams.subscribe((params: {
      [x: string]: "";
    }) => {
      this.failures = JSON.parse(params['failures']);
      this.words = JSON.parse(params['words']);
      this.numSuccesses = this.failures.filter(val=> val===false).length
    });
  }
}


