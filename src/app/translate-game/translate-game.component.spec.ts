import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateGameComponent } from './translate-game.component';

describe('TranslateGameComponent', () => {
  let component: TranslateGameComponent;
  let fixture: ComponentFixture<TranslateGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranslateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
