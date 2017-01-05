# ms-kawasaki

Ms. Kawasaki is a companion component to the [ng2-translate](https://github.com/ocombe/ng2-translate) library.
It assists you (or an editor) in composing a ng2-translate file (the json file holding all translations). 

While navigating an application, each time you visit a new page, the companion lists all 
translation keys (and values, if any) of that page. It allows you to specify and save new translations.
These new translations are immediately reflected in the application. When clicking the download button,
the new translations are merged with the existing ng2-translate file.

Here's a [demo](http://recordit.co/e8ToGnT7Qx).

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

Once your library is imported, you can include it in your angular templates like so:

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
 
 A nesting level of `1` results in: 

 ```
 { "a.nested.key" : "val" }
 ```

 The default value is 1;


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

## Ms. Kawasaki

[with intensity](https://www.google.be/search?q=ms+kawasaki+lost+in+translation&espv=2&biw=1920&bih=960&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwi-27L33qvRAhXdOlAKHZGSDFEQsAQIHA)

## License

MIT © [david-bulte](david.bulte@gmail.com)
