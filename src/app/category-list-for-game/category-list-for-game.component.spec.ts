import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListForGameComponent } from './category-list-for-game.component';

describe('CategoryListForGameComponent', () => {
  let component: CategoryListForGameComponent;
  let fixture: ComponentFixture<CategoryListForGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListForGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryListForGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
