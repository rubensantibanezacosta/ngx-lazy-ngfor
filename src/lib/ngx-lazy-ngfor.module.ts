import { QuantityDirective } from './quantity.directive';
import { NgModule } from '@angular/core';
import { LazyForDirective } from './lazy-for.directive';
import { NgxLazyNgforComponent } from './ngx-lazy-ngfor.component';



@NgModule({
  declarations: [
    NgxLazyNgforComponent,
    LazyForDirective,
    QuantityDirective
  ],
  imports: [
    
  ],
  exports: [
    NgxLazyNgforComponent,
    LazyForDirective,
    QuantityDirective
  ]
})
export class NgxLazyNgforModule { }
