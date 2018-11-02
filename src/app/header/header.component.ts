import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHdg:string;
  logo:string;
  links:PageLink[];

  constructor() { 
    this.majHdg = 'My Insurance';
    this.logo = 'assets/images/myLogo.jpg';
    this.links = [
      {linkText:'Products',linkStyle:'products',linkRef:'products'},
      {linkText:'Customers',linkStyle:'history',linkRef:'history'},
      {linkText:'Advisors',linkStyle:'advisors',linkRef:'advisors'},
      {linkText:'Get Quote',linkStyle:'quote',linkRef:'quote'},
      {linkText:'Branches',linkStyle:'branches',linkRef:'branches'}
    ];
  }

  ngOnInit() {
  }

}
