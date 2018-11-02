import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {

  isDisabled:boolean = true;
  age = 18;
  suggestedPolicy='';
  constructor() { }

  ngOnInit() {
  }

  showPolicy(){
    console.log('policy details');
    if(this.age>30){
      this.suggestedPolicy="Jeevan Anand";
    }else{
      this.suggestedPolicy="Jeevan Akashay";
    }
  }

  changeStatus(){
    this.isDisabled = false;
  }

}
