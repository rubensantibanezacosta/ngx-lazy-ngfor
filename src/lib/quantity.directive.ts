import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[lazySize]'
})
export class QuantityDirective implements OnInit {
  @Input("lazySize") lazySize;
  element: ElementRef;
  constructor(public elementr: ElementRef) {
    this.element = elementr;
  }
  ngOnInit(): void {
    this.lazySize ? this.element.nativeElement.setAttribute("data-quantity", this.lazySize):null;
  }


}
