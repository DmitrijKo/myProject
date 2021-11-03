import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {

  uzduotys = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUzduotys();
  }

  getUzduotys() {
    this.http
      .get('https://tasklist-5915b-default-rtdb.europe-west1.firebasedatabase.app/uzduotis.json')
      .subscribe((response) => {
        const temp = [];
        for (const key in response) {
          temp.push({ ...response[key], id: key });
        }
        this.uzduotys = temp;
      });
  }
}
