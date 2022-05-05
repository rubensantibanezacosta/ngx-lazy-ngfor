import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxLazyNgforService {

  loadMore(quantity: number, originalObject: any[], lazyObject: any[], counter) {
    if (originalObject.length - counter > quantity) {
      for (let i = counter; i < counter + quantity; i++) {
        lazyObject.push(originalObject[i])
      }
    } else {
      const rest = originalObject.length - counter;
      const limit = counter + rest
      if (counter < originalObject.length) {
        for (let i = counter; i < (limit); i++) {
          lazyObject.push(originalObject[i])
        }
      }
    }
  }
}
