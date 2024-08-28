import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatedWord } from '../../shared/model/translated-word';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../../shared/model/category';

@Component({
  selector: 'app-end-of-game',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './end-of-game.component.html',
  styleUrl: './end-of-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndOfGameComponent {
  @Input() words: TranslatedWord[] = [];
  failures: boolean[] = [];
  numSuccesses : number = 0;
  Math=Math;
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit(){
    this.route.queryParams.subscribe((params: {
      [x: string]: any;
    }) => {
      this.failures = JSON.parse(params['failures']);
      this.words = JSON.parse(params['words']);
      this.numSuccesses = this.failures.filter(val=> val===false).length
    });
  }
  
}
