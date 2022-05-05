import { NgxLazyNgforService } from './ngx-lazy-ngfor.service';
import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[lazyFor][lazyForOf]'
})
export class LazyForDirective {


  lazyObject: any[] = [];
  startOject: any[];
  element: ElementRef;
  @Input() quantity: number = 5;
  counter = 0;
  @Input() set lazyForOf(collection) {
    this.counter = 0;
    this.startOject = collection;
    this.view.clear();
    this.ngxLazyNgforService.loadMore(this.quantity, this.startOject, this.lazyObject, this.counter);
    this.lazyObject.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, { $implicit: item, index });
    });
    this.lazyObject = []
    this.elementr.nativeElement.parentElement.addEventListener('scroll', (event) => {
      ;
      this.emitScrollInBottom(event.target)
    });
  };



  constructor(public elementr: ElementRef, private ngxLazyNgforService: NgxLazyNgforService, private view: ViewContainerRef, private template: TemplateRef<any>) {  }



  //detect if scroll position is in bottom of component
  isInBottom(element: any) {
    return element.scrollTop + element.offsetHeight >= element.scrollHeight;
  }

  //emit event when scroll position is in bottom of component
  emitScrollInBottom(element: any) {

    if (this.isInBottom(element)) {
      if (this.counter < this.startOject.length) {
        this.counter += this.quantity;
        this.ngxLazyNgforService.loadMore(this.quantity, this.startOject, this.lazyObject, this.counter);
        this.lazyObject.forEach((item, index) => {
          this.view.createEmbeddedView(this.template, { $implicit: item, index });
        });
        this.lazyObject = []
      }
    }
  }
}



