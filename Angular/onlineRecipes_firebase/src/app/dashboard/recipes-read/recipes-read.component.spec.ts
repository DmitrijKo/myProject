import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesReadComponent } from './recipes-read.component';

describe('RecipesReadComponent', () => {
  let component: RecipesReadComponent;
  let fixture: ComponentFixture<RecipesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
