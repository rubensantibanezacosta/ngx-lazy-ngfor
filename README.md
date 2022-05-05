# ngx-lazy-ngfor - [Angular](http://angular.io/)

Ngx lazy ngFor is a Typescript library for make angular _ngFor_ lazy, and triggered by scroll event.

## Dependencies

- [Angular](https://angular.io) (_requires_ Angular 13+)


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

The library uses only one structural directive `*lazyFor`, and one attribute directive `[lazySize]`


### LazyFor Directive

---

Use this directive to reveal  in batches your **DOM list** upon scroll.

##### Basic Usage

```html
<parentElement>
  <div class="item" *lazyFor="let yourVariable of YourObject">..</div>
</parentElement>
```

Parent element must be scrollable vertically.

You could use the same functionalities of Angular `*ngFor`

##### With Custom Options

As default, you will have 10 elements size list in your viewport, and it will use 10 elements size batches.
You can also pass in a custom  size configuration to the directive, from its parent element.

```html
<parentElement [lazySize]="3">
  <div class="item" *lazyFor="let yourVariable of YourObject">..</div>
</parentElement>
```

This will override the default configuration used when loading de batches of list.

---

## Credits

_[ngx-lazy-ngfor](https://www.npmjs.com/package/ngx-lazy-ngfor)_ - is built by [Ruben Santibañez Acosta](https://github.com/rubensantibanezacosta). Put a :star2: in **[Github](https://github.com/rubensantibanezacosta/ngx-lazy-ngfor)** Please!
