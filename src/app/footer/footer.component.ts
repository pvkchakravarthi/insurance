import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links: PageLink[] = [{linkText:'Twitter',linkStyle:'fa fa-1x fa-twitter'},{linkText:'Facebook', linkStyle:'fa fa-1x fa-facebook'}];
  constructor() { }

  ngOnInit() {
  }

}
