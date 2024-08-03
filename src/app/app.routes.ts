import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ChooseGameComponent } from './chooseGame/chooseGame.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: "", component: CategoriesListComponent},
    {path: "let's_play", component: ChooseGameComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "help", component: HelpComponent},
    {path: "game1/:id", component: Game1Component},
    {path: "game2/:id", component: Game2Component},
];
