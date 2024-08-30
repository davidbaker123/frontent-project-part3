import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatedWord } from '../../shared/model/translated-word';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Category } from '../../shared/model/category';
import { ExitIconComponent } from "../exit-icon/exit-icon.component";



@Component({
  selector: 'app-end-of-game',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    ExitIconComponent
],
  templateUrl: './endofgame.component.html',
  styleUrl: './endofgame.component.css',
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


