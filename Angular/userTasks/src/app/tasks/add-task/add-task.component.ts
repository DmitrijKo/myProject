import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
   
  uzduotisVisible = false;

  addTask(project, description) {
    if (project.value != '' && description.value != '') {
      this.tasksService.addTask(project.value, description.value);
      (project.value = ''), (description.value = '');
    }
  }

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}
}
