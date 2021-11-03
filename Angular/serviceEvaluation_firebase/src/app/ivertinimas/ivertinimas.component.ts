import {Component,ElementRef,OnDestroy,OnInit,ViewChild,} from '@angular/core';
import { Subscription } from 'rxjs';
import { Ivertinimas } from '../ivertinimas.model';
import { IvertinamasService } from '../ivertinimas.service';

@Component({
  selector: 'app-ivertinimas',
  templateUrl: './ivertinimas.component.html',
  styleUrls: ['./ivertinimas.component.css'],
})
export class IvertinimasComponent implements OnInit, OnDestroy {

  ivertinimai: Ivertinimas[] = [];
  loading: boolean = false;
  errorSubscription: Subscription;
  error: string;
  @ViewChild('vardasPavarde', { static: true }) vardasPavarde: ElementRef;
  @ViewChild('komentaras', { static: true }) komentaras: ElementRef;

  constructor(private ivertinimasService: IvertinamasService) {}

  ngOnInit(): void {
     this.errorSubscription = this.ivertinimasService.error.subscribe((error) => {
      this.error = error;
    });
    this.loadIvertinimai();
  }

  send(vardasPavarde: string, kokybe: string, komentaras: string) {
   this.ivertinimasService.postIvertinimas(vardasPavarde, kokybe, komentaras).subscribe(
     () => {
       this.loadIvertinimai();
     },
     (error) => {
       this.error = error.message;
     }
   );
   this.vardasPavarde.nativeElement.value="";
   this.komentaras.nativeElement.value="";
 }

 loadIvertinimai() {
   this.loading = true;
   this.ivertinimasService.getIvertinimai().subscribe(
     (data) => {
       this.ivertinimai = data;
       this.loading = false;
     },
     (error) => {
       this.error = error.message;
     }
   );
 }

 ngOnDestroy() {
   this.errorSubscription.unsubscribe();
 }

 parseInt(s:string):number {    
    return parseInt(s)
 }
}
