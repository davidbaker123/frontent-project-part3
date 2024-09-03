import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { GameProfile } from '../../shared/model/gameProfile';
import { Category } from '../../shared/model/category';
import { CategoryDialogComponent } from '../category-dialog/categoryDialog.component';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { GameProfileService } from '../services/gamesInformation.service';

@Component({
  selector: 'app-choose-game',
  standalone: true,
  templateUrl: './chooseGame.component.html',
  styleUrls: ['./chooseGame.component.css'],
  imports: [MatCardModule,RouterLink,NgFor,],
})
export class ChooseGameComponent implements OnInit {
@Input()
  games: GameProfile[] = [];
 

  constructor(
    private gameProfileService: GameProfileService,
    private dialog: MatDialog,
    private router: Router  ) {}

  ngOnInit(): void {
    this.games = this.gameProfileService.getGames();
  }

  openCategoryDialog(game: GameProfile): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      data: { game }
    });




   dialogRef.afterClosed().subscribe((result: Category) => {
      if (result) {
        this.router.navigate([game.urlAddress.replace(':id', result.id.toString())]);
     }
    });
}
}
