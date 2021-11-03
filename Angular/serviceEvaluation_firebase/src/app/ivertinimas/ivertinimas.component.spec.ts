import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvertinimasComponent } from './ivertinimas.component';

describe('IvertinimasComponent', () => {
  let component: IvertinimasComponent;
  let fixture: ComponentFixture<IvertinimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvertinimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvertinimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
