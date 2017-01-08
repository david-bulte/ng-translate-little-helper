import {Component, OnInit} from "@angular/core";
import {TranslateService} from "ng2-translate";
import {environment} from "../environments/environment";
import {TranslateCompanionService} from "ng-translate-little-helper";

@Component({
  selector: 'app-root',
  template: `
        <div class="menu">
          <h1 class="title">Your Webshop</h1>
          <nav>
            <a routerLink="books" routerLinkActive="active">{{'menu-item-books' | translate}}</a> | 
            <a routerLink="music" routerLinkActive="active">{{'menu-item-music' | translate}}</a>
          </nav>
          <span class="choose-lang">
            <span>{{'choose-language' | translate}}</span>: 
            <a (click)="setLang('nl')">{{'lang-nl' | translate}}</a> |
            <a (click)="setLang('en')">{{'lang-en' | translate}}</a>        
          </span>
        </div>

        <div>
            <router-outlet></router-outlet>
        </div>

        <mk-translate-companion style="position: absolute; right: 0; top: 30px; height: 300px"></mk-translate-companion>
    `,
  styles: [
    `
        .title {
          margin-top:0;
          margin-bottom:0;
        }
        
        .menu {
          background-color: lightgreen;
        }
        
        .menu * {
          display: inline-block;
        }
        
        .menu nav {
          margin-left: 50px;
        }
        
        .menu .choose-lang {
          float: right;
          background-color: yellow;
          padding:5px;
        }
      `
  ]
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService, private translateCompanion:TranslateCompanionService) {
  }

  ngOnInit(): void {
    this.translateService.use('en');
    this.translateCompanion.onSave.subscribe(translations => {
      console.log('saved!!!!');
    });
  }

  setLang(lang) {
    this.translateService.use(lang);
  }

}
