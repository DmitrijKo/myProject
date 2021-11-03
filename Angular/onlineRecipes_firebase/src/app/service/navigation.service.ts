import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
   
  public loginSubject = new Subject<boolean>();

  constructor() {}
}
