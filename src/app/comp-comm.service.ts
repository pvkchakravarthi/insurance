import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompCommService {

  message:BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  changeMessage(latestMessage){
    this.message.next(latestMessage);
  }
}
