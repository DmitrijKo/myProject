import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
   
  @Input() taskItem;
  @Output() updateUzduotys = new EventEmitter();

  statusas;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  changeStatus(id: string,) {
    this.http
      .patch('https://tasklist-5915b-default-rtdb.europe-west1.firebasedatabase.app/uzduotis/' +id +'.json',{ statusas: this.statusas })
      .subscribe((response) => {
         this.updateUzduotys.emit();
      });
  }

  deleteUzduotis(id: string) {     
    this.http
      .delete('https://tasklist-5915b-default-rtdb.europe-west1.firebasedatabase.app/uzduotis/' +id +'.json')
      .subscribe((response) => {
         this.updateUzduotys.emit(); 
      });
  }

  getBackground(statusas) {
   if (statusas == 'Laukiama') {
      return 'rgba(246, 216, 216, 0.34)';
   }
   if (statusas == 'Vykdoma') {
      return 'rgba(216, 230, 246, 0.34)';
   }
   if (statusas == 'Atlikta') {
      return 'rgba(216, 246, 227, 0.34)';
   }
}
}
