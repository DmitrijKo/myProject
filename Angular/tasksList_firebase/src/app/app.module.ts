import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTasksListComponent } from './tasks-list/add-tasks-list/add-tasks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from './tasks-list/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    AddTasksListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
