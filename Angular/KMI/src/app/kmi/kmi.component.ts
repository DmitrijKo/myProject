import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmi',
  templateUrl: './kmi.component.html',
  styleUrls: ['./kmi.component.css']
})
export class KmiComponent implements OnInit {

   ugis: number;
   svoris: number;
   kmi: number;

   skaiciuoti() {
      this.kmi = this.svoris / Math.pow(this.ugis/100, 2);
   }

  constructor() { }

  ngOnInit(): void {
  }

}
