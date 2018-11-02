import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { Policy } from '../policy';
import { TestimonyComponent } from '../testimony/testimony.component';
import { FooterComponent } from '../footer/footer.component';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  
  @ViewChildren(FooterComponent) sectionList:QueryList<any>;
  @ViewChild(TestimonyComponent) compRef:TestimonyComponent;
  feedback1:string;feedback2:string;
  policyList:Policy[] = [{policyName:'Jeevan Anand',policyDesc:'Jeevan Anand - Policy with life cover and bonus'},
                        {policyName:'Jeevan Akshay',policyDesc:'Jeevan Akshay - Policy with life cover without bonus, regular money back'}
                      ];
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.feedback1 = this.compRef.getCorporateCustFeedback();
    this.feedback2 = this.compRef.getRetailCustFeedback();
    this.ref.detectChanges();

    console.log(this.sectionList);
    this.sectionList.forEach(eachcomponent => console.log(eachcomponent.links))
  }

}
