import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ivertinimas } from './ivertinimas.model';
import { Observable, pipe, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IvertinamasService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  getIvertinimai() {
    return this.http
      .get<{ [key: string]: Ivertinimas }>(
        'https://paslauguivertinimas-default-rtdb.europe-west1.firebasedatabase.app/ivertinimai.json'
      )
      .pipe(
        map((responseData) => {
          const ivertinimai: Ivertinimas[] = [];
          for (const key in responseData) {
            ivertinimai.push({ ...responseData[key], id: key });
          }
          return ivertinimai;
        })
      );
  }

  postIvertinimas(vardasPavarde: string, kokybe: string, komentaras: string ) {
    const ivertinimas: Ivertinimas = { vardasPavarde: vardasPavarde, kokybe: kokybe, komentaras: komentaras };

    return this.http.post<{ name: string }>(
      'https://paslauguivertinimas-default-rtdb.europe-west1.firebasedatabase.app/ivertinimai.json',
      ivertinimas
    );
  }
}
