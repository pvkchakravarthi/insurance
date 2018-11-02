import { Component, OnInit } from '@angular/core';
import { InsuranceAdvisor } from '../insurance-advisor';
import { InsuranceAPIService } from '../insurance-api.service';
import { MyLogger } from '../my-logger';

@Component({
  selector: 'app-show-advisors',
  templateUrl: './show-advisors.component.html',
  styleUrls: ['./show-advisors.component.css']
})
@MyLogger()
export class ShowAdvisorsComponent implements OnInit {

  advisorList:InsuranceAdvisor[];
  
  constructor(private service:InsuranceAPIService) { 
    /*this.service.findAllAdvisors().subscribe(
        data => this.advisorList=data,
        err => console.log(err)
      );*/
  }

  ngOnInit() {
    /*this.service.findAllAdvisors().subscribe(
      data => this.advisorList=data,
      err => console.log(err)
    );*/

    this.service.findAllAdvisorsAsPromise().then(
      data => this.advisorList=data
    );
  }

}
