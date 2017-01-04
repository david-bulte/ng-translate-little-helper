import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {AppComponent} from "./app.component";
import {BooksComponent} from "./books/books.component";
import {MusicComponent} from "./music/music.component";
import {RouterModule} from "@angular/router";
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import {routes} from "./app.routes";
import {TranslateCompanionModule} from "ms-kawasaki";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    TranslateCompanionModule.forRoot({nesting : 2})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './i18n', '.json');
}
