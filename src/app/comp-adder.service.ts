import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver:ComponentFactoryResolver) { }

  setViewRef(viewRefer:ViewContainerRef){
    this.viewRef = viewRefer;
  }

  addComponent(compToAdd: any): any {
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector)
    this.viewRef.insert(compRef.hostView);
    
    console.log(this.viewRef.parentInjector);
    console.log(this.viewRef.injector);

    return compRef;

  }

  remove(){
    this.viewRef.detach();
  }

}
