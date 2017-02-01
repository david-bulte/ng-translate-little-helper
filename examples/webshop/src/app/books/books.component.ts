import {Component, OnInit} from "@angular/core";
import {TranslateService} from "ng2-translate";
import {Observable, BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-books',
  template: `
    <p>{{'books-welcome' | translate}}</p>
    <p>{{'suggestions' | translate}}</p>
    
    <ul>
      <li>Philip Roth : {{'books.sabaths-theatre' | translate}}</li>
      <li>Richard Dawkins : {{'books.the-magic-of-reality' | translate}}</li>
      <li>Alan Moore : {{'books.watchmen' | translate}}</li>
      <li>Coetzee : {{'books.disgrace' | translate}}</li>
      <li>Iris Murdoch : {{'books.the-sea-the-sea' | translate}}</li>
    </ul>

    <p>{{'books.nested.key' | translate}}</p>
    <p>{{'books.test_with_params' | translate:{name : 'success'} }}</p>
    <div [innerHTML]="'books.cover' | translate"></div>
    
    <button (click)="showSomeMore = true">show some more</button>
    <div *ngIf="showSomeMore">
        {{'here_is_some_more' | translate}}
    </div>
    
  `,
  styles: []
})
export class BooksComponent implements OnInit {

  constructor(private translateService: TranslateService) {
  }

  params;
  // translated: Observable<string>;

  ngOnInit() {

    let langChange: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    this.translateService.onLangChange.subscribe(lang => {
      if (lang !== null) {
        langChange.next(lang);
      }
    });
  }

}
