import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CompAdderService } from '../comp-adder.service';
import { ShowLocationsComponent } from '../show-locations/show-locations.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  srchCity:string='';
  branchList:string[];

  @ViewChild('locationInfo',{read:ViewContainerRef}) viewRef: ViewContainerRef;
  constructor(private service:CompAdderService) { }

  ngOnInit() {
  }

  onChange(val){
    this.branchList = val;
  }

  add(){
    //this.service.remove();
    this.service.setViewRef(this.viewRef);
    const comp = this.service.addComponent(ShowLocationsComponent);
    const locationComp = (<ShowLocationsComponent>comp.instance);

    locationComp.selectedLoc.subscribe(value => {
      this.srchCity = value;
      if(value.length > 0){
        this.remove();
      }
    });
  }

  remove(){
    this.service.remove();
  }

}
