import { Component, OnInit, Input } from '@angular/core';
import { PageLink } from '../page-link';
import { CompCommService } from '../comp-comm.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() linksFromParent:PageLink[];
  showLogin=true;
  showLogout=false;
  constructor(private service:CompCommService) { }

  ngOnInit() {
    this.service.message.subscribe(status => {
      if(status==='logged'){
        this.showLogin=false;
        this.showLogout =true;
      }else if(status==='logout'){
        this.showLogin=true;
        this.showLogout =false;

      }
    });
  }

}
