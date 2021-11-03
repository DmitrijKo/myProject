import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmiComponent } from './kmi.component';

describe('KmiComponent', () => {
  let component: KmiComponent;
  let fixture: ComponentFixture<KmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
