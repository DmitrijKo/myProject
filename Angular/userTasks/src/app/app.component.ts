import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService, UsersService]
})
export class AppComponent {
  title = 'usersTasks';
}
