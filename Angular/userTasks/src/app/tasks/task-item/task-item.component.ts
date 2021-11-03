import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {

  tasks;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
     this.tasks = this.tasksService.tasks;
  }
}
