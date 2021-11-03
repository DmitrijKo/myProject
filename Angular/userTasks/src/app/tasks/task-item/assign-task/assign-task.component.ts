import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from './../../../tasks.service';
import { UsersService } from './../../../users.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css'],
})
export class AssignTaskComponent implements OnInit {

  @Input() taskProject;
  @Input() taskDescription;
  @Input() taskIndex;

  selectas = -1;

  users;
  tasks;

  constructor(private usersService: UsersService, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.users = this.usersService.users;
    this.tasks = this.tasksService.tasks;
  }

  assign(user) {
   this.usersService.assign(user.value, this.taskProject, this.taskDescription);
   this.tasks.splice(this.taskIndex, 1);
 }

}
