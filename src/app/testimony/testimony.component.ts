import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRetailCustFeedback():string{
    return "Anand: Ok. Can be better";
  }

  getCorporateCustFeedback():string{
    return "Vz: Good";
  }

}
