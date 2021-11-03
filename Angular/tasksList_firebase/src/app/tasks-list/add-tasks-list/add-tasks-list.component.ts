import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-tasks-list',
  templateUrl: './add-tasks-list.component.html',
  styleUrls: ['./add-tasks-list.component.css']
})
export class AddTasksListComponent implements OnInit {

   @Output() updateUzduotys = new EventEmitter();

   pavadinimas = '';
   aprasymas = '';
   statusas = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postUzduotis() {
   const uzduotis = {
      pavadinimas: this.pavadinimas,
      aprasymas: this.aprasymas,
      statusas: this.statusas
   }

   this.http
   .post('https://tasklist-5915b-default-rtdb.europe-west1.firebasedatabase.app/uzduotis.json', uzduotis)
   .subscribe((response) => {
      this.updateUzduotys.emit();
      this.pavadinimas = '';
      this.aprasymas = '';
      this.statusas = '';      
   });
  }
}
