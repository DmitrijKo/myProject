import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksListComponent } from './add-tasks-list.component';

describe('AddTasksListComponent', () => {
  let component: AddTasksListComponent;
  let fixture: ComponentFixture<AddTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTasksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
