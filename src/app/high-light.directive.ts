import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el:ElementRef, private rederer:Renderer2) { }

  @HostListener('mouseover') over(){
    this.rederer.addClass(this.el.nativeElement,'rotate');
    this.rederer.setStyle(this.el.nativeElement,'font-size','2.3em');
    console.log('over called');
    console.log(this.el.nativeElement);
  }

  @HostListener('mouseout') out(){
    this.rederer.removeClass(this.el.nativeElement,'rotate');
    this.rederer.setStyle(this.el.nativeElement,'font-size','1em');
    console.log('out called');
    console.log(this.el.nativeElement);
  }

}
