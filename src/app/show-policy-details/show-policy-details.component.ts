import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetail } from '../policy-detail';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  policyDetails:PolicyDetail[];
  srchName:string = '';
  page=0;
  policyData:PolicyDetail = {
    id:0,
    policyHolderName:'',
    policyAmount:0,
    maturityDate:new Date()
  };
  buttonText='Add';
  updPos=-1;
  toggleAddForm= false;
  showUp=true;
  showDown=false;

  @ViewChild('f') form: any;
  constructor(private service:InsuranceAPIService) { }

  ngOnInit() {

    this.service.findPolicyDetails().subscribe(
      data => this.policyDetails=data,
      err => console.log(err)
    )
  }

  submit(){
    console.log(this.policyData);
    if(this.buttonText==='Add'){
      this.service.addPolicy(this.policyData).subscribe(resp =>{
        this.policyDetails.push(resp);
        this.form.reset();
      });
    }else{
      this.service.updatePolicy(this.policyData).subscribe(resp =>{
        this.policyDetails[this.updPos] = resp;
        this.form.reset();
        this.buttonText='Add';
        this.toggleAddForm=false;
      });
    }
  }

  newPolicy(){
    this.toggleAddForm=!this.toggleAddForm;
    this.showUp=!this.showUp;
    this.showDown=!this.showDown;
  }

  update(policy){
    console.log('update called');
    this.updPos = this.policyDetails.indexOf(policy);
    this.buttonText = 'Update';
    if(!this.toggleAddForm){
      this.newPolicy();
    }
    this.policyData = policy;


  }

  remove(policy){
    const inxPos = this.policyDetails.indexOf(policy);
    console.log('remove called'+inxPos);
    this.service.removePolicy(policy).subscribe(resp => {
      this.policyDetails.slice(inxPos,1);
    });
  }

}
