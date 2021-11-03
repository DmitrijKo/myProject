import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-uzdaviniai',
  templateUrl: './uzdaviniai.component.html',
  styleUrls: ['./uzdaviniai.component.css'],
})
export class UzdaviniaiComponent implements OnInit {
  klausimai; // visi klausimai
  klausimoNr: number = 0; // dabartinis klausimo nr.
  visoKlausimu: number = 0; // kiek is viso yra klausimu
  teisingiAtsakymai: number = 0; // kiek teisingai atsakytu klausimu
  laikas: number; // zaidimo laikas
  atsakymas: number; // spejimo atsakymas
  pabaiga = false; // zaidimo pabaiga
  visibilityKlausimai = false;
  visibilityRezultatas = true;

  countDownObservable: Observable<number>;
  subscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.klausimai = this.dataService.klausimai;
    this.visoKlausimu = this.klausimai.length;
    this.startCountDown();
  }

  createCountDownObservable() {
    this.countDownObservable = new Observable((observer) => {
      let count: number = 15;
      setInterval(() => {
        if (count < 0) {
          setTimeout(() => {
            observer.complete();
          }, 1000);
        } else {
          observer.next(count);
        }
        count--;
      }, 1000);
    });
  }

  startCountDown() {
    this.createCountDownObservable();
    this.subscription = this.countDownObservable.subscribe(
      (count: number) => {
        this.laikas = count;
        console.log(count);
      },
      () => {},
      () => {
        this.speti(false);
        if (!this.pabaiga) {
          this.startCountDown();
        }
      }
    );
  }

  speti(start: boolean = true) {
    if (this.klausimai[this.klausimoNr].atsakymas == this.atsakymas) {
      this.teisingiAtsakymai++;
    }

    if (this.klausimoNr < this.visoKlausimu - 1) {
      this.klausimoNr++;
    } else {
      this.pabaiga = true;
      this.visibilityRezultatas = false;
      this.visibilityKlausimai = true;
    }

    this.atsakymas = undefined;

    this.subscription.unsubscribe();

    if (!this.pabaiga) {
      this.laikas = 15;
      
      if (start) {
        this.startCountDown();
      }
    }
  }
}
