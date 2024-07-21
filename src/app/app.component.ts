import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ChooseGameComponent } from './chooseGame/chooseGame.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent,DashboardComponent,HelpComponent,ChooseGameComponent,Game1Component,Game2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'little-linguist';
}
