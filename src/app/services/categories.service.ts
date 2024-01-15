import { Injectable } from '@angular/core';
import { Category } from '../../shared/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories : Map<number, Category>;
  private nextId = 1;

  constructor() { 
    this.categories = new Map();
  }

  list() : Category[] {
    return Array.from(this.categories.values());
  }

  get(id : number) : Category | undefined {
    return this.categories.get(id);
  }

  delete(id : number) : void {
    this.categories.delete(id);
  }

  update(category : Category) : void {
    this.categories.set(category.id, category);
  }

  add(category : Category) : void {
    this.categories.set(this.nextId, category);
    ++this.nextId;
  }
}
