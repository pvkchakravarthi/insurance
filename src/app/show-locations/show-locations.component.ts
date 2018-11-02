import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-show-locations',
  templateUrl: './show-locations.component.html',
  styleUrls: ['./show-locations.component.css']
})
export class ShowLocationsComponent implements OnInit {

  selectedLoc: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  ngOnInit() {
  }

  capture(city:string){
    this.selectedLoc.next(city);
    console.log(city);
  }

}
