import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListForGameComponent } from './category-list-for-game/category-list-for-game.component';
import { TranslateGameComponent } from './translate-game/translate-game.component';

export const routes: Routes = [
    {path: "", component: CategoriesListComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "choosecategory", component: CategoryListForGameComponent},
    {path: "translategame/:id", component: TranslateGameComponent},
];
