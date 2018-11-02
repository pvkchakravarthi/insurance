import { Component, OnInit } from '@angular/core';
import { CompCommService } from '../comp-comm.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  formConfig: any = [
    {type:'text',name:'userName',label:'User Name',constraint: Validators.required},
    {type:'password',name:'password',label:'Password',constraint: Validators.required}
  ];
  errorMsg;
  constructor(private service:CompCommService, private builder:FormBuilder, 
    private router: Router, private actRoute:ActivatedRoute) 
  { 
    this.loginForm = this.builder.group({ });
  }

  ngOnInit() {

    this.actRoute.params.subscribe(params => {
      this.errorMsg = params.msg;
      console.log(this.errorMsg);
    });

    this.formConfig.forEach(element => {
      this.loginForm.addControl(element.name,new FormControl('',{validators: element.constraint}));
    });
  }

  validate(){
    const uname = this.loginForm.controls.userName.value;
    const upwd = this.loginForm.controls.password.value;
    if(uname==='india' && upwd === 'india') {
      sessionStorage.setItem('logged','true');
      this.router.navigate(['products']);
    } else {
      sessionStorage.setItem('logged','false');
    }
    this.service.changeMessage('logged');
    console.log(this.loginForm.value);
  }

}
