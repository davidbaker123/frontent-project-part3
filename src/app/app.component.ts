import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dash-board/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ChooseGameComponent } from './choose-Game/chooseGame.component';
import { Game1Component } from './mixed-letters-game/mixed-letters-game.component';
import { Game2Component } from './sorting-game/sorting-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    HelpComponent,
    ChooseGameComponent,
    Game1Component,
    Game2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'little-linguist';
}
