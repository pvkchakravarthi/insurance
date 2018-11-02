import { Component, OnInit } from '@angular/core';
import { CompCommService } from '../comp-comm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:CompCommService, private router:Router) { }

  ngOnInit() {
    
  }
  validate(){
    this.service.changeMessage('logout');
    sessionStorage.removeItem('logged');
    this.router.navigate(['login']);
  }

}
