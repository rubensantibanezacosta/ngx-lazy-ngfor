# ngx-scroll-view - [Angular](http://angular.io/)

Ngx scroll view is a Typescript library for make angular *ngFor* lazy, and triggered by scroll event.

## Dependencies

- [Angular](https://angular.io) (_requires_ Angular 13+)

## Versions

- _**[Version - 0.0.3](https://www.npmjs.com/package/ngx-scroll-view)**_ - _Basic and custom animations_
- _**[Version - 0.1.3](https://www.npmjs.com/package/ngx-scroll-view)**_ - _Pre-animation and pos-animation triggers added_

## Installation

Install above dependencies via _npm_, run:

```shell
npm install --save ngx-lazy-ngfor
```

---

Once installed you need to import the main module:

```ts
import { NgxLazyNgforModule } from 'ngx-lazy-ngfor';


@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxLazyNgforModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

The library uses only one directive: `scrollView`.

### LazyFor Directive

---

Use this directive to reveal a **single DOM element** upon scroll.

##### Basic Usage

```html
<parentElement> 
<div class="item" *lazyFor="let yourVariable of YourObject">..</div>
</parentElement>
```
Parent element must be scrollable vertically.

You could use the same functionalities of Angular *ngFor*

##### With Custom Options

As default, you will have 5 elements in your viewport.
You can also pass in a custom configuration to the directive.



 ** this functionality will be in the next version


This will override the default configuration used when revealing this particular element.



---

## Credits

_[ngx-scroll-view](https://www.npmjs.com/package/ngx-scroll-view)_ - is built by [Ruben Santibañez Acosta](https://github.com/rubensantibanezacosta). Put a :star2: in **[Github](https://github.com/rubensantibanezacosta/ngx-scroll-view)** Please!
