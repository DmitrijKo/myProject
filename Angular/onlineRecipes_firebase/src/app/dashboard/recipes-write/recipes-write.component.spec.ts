import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesWriteComponent } from './recipes-write.component';

describe('RecipesWriteComponent', () => {
  let component: RecipesWriteComponent;
  let fixture: ComponentFixture<RecipesWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
