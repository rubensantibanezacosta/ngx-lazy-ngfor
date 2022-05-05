import { NgModule } from '@angular/core';
import { LazyForDirective } from './lazy-for.directive';
import { NgxLazyNgforComponent } from './ngx-lazy-ngfor.component';



@NgModule({
  declarations: [
    NgxLazyNgforComponent,
    LazyForDirective
  ],
  imports: [
    
  ],
  exports: [
    NgxLazyNgforComponent,
    LazyForDirective
  ]
})
export class NgxLazyNgforModule { }
