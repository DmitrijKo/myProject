import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css'],
})
export class UserTasksComponent implements OnInit {

  @Input() tasks;

  constructor() {}

  ngOnInit(): void {
  }
}
