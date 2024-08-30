import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ChooseGameComponent } from './chooseGame/chooseGame.component';
import { Game1Component } from './mixed-letters-game/mixed-letters-game.component';
import { Game2Component } from './sorting-game/sorting-game.component';
import { EndOfGameComponent } from './endofgame/endofgame.component';


export const routes: Routes = [
    { path: "", component: DashboardComponent },
    {path: "dashboard", component: DashboardComponent},
    { path: "categories", component: CategoriesListComponent },
    {path: "let's_play", component: ChooseGameComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "help", component: HelpComponent},
    {path: "mixed-letters-game/:id", component: Game1Component},
    {path: "sorting-game/:id", component: Game2Component},
    {path: "endofgame", component: EndOfGameComponent},
    {path: "exit", component: ChooseGameComponent},
    
];
