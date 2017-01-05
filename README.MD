# ms-kawasaki

Companion component to [ng2-translate](https://github.com/ocombe/ng2-translate) file to help you compose 
a translation.json file. 

While you navigate the application, the companion lists all translate keys used on the page. It allows you 
to enter a translation. Clicking the download button, downloads an translate.json file, with the new 
translations included. 

Here's a [demo](http://recordit.co/e8ToGnT7Qx)

## Installation

To install this library, run:

```bash
$ npm install ms-kawasaki --save
```

## Consuming your library

From your Angular `AppModule`:

```typescript
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "ng2-translate";
import {routes} from "./app.routes";
// Import your library
import {MsKawasakiModule} from "ms-kawasaki";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
    // Specify your library as an import
    MsKawasakiModule.forRoot({nesting : 2})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Once your library is imported, you can include it in your HTML like so:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<mk-translate-companion></mk-translate-companion>
```

## Configuring your library

`MsKawasakiModule.forRoot()` takes a `TranslateCompanionConfig` parameter. You can configure 
the following:

- disabled: a boolean specifying whether the companion is disabled or not. Might be handy if you want to
disable the companion, e.g. in production mode;
- nesting: when exporting the translate keys, one can define the number of nesting. Take e.g. the 
key `a.nested.key`. With a nesting level of `2`, this will become:
 
 ```
 {
    "a" : {
        "nested.key" : "val"
    }
 }
 ```
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A nesting level of `1` results in: 

```
{ "a.nested.key" : "val" }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The default value is 1;


## Methods

You can listen for when the user saves his translations through the `TranslateCompanionService.onSave.subscribe`
method.

```
  constructor(private translateCompanion:TranslateCompanionService) {
  }

  ngOnInit(): void {
    this.translateCompanion.onSave.subscribe(translations => {
      console.log('saved!!!!');
    });
  }
```
## License

MIT © [david-bulte](david.bulte@gmail.com)
