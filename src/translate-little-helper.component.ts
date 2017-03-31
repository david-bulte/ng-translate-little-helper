import {TranslateLittleHelperService, TranslateLittleHelperConfig} from "./translate-little-helper.service";
import {OnInit, ElementRef, ViewChild, Component} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
import {Translation} from "./translation";
@Component({
    selector: 'translate-little-helper',
    template: `
        <div class="helper" *ngIf="helper.initialized$ | async">
          <form>
            <div class="helper-block info">
              <span>current lang = {{helper?.getCurrentLang()}}</span>
            </div>
            
            <div class="helper-block translations">        
                <div *ngFor="let trans of translations$ | async">
                    <label for="{{trans.key}}">{{trans.key}}</label>
                    <textarea name="{{trans.key}}" [(ngModel)]="trans.value"></textarea>
                </div>
            </div>
            
            <div class="helper-block buttons">
              <button (click)="toggleKeysVisible()">
                  <span *ngIf="(keysVisible$ | async) === true">hide keys</span>
                  <span *ngIf="(keysVisible$ | async) === false">show keys</span>
              </button>
              <input #cb [ngModel]="notTranslatedOnly$ | async" name="filterOn" type="checkbox" 
                (ngModelChange)="toggleFilter(cb.checked)"> not translated only {{filterOn}}
              <button (click)="reload()">reload</button>
              <button (click)="save()">save</button>
              <button (click)="download()">download</button>
              <a #downloadEl id="downloadLink">download</a>
            </div>
            
          </form>
        </div>
    `,
    styles: [
        `
      .helper {
        background-color: rgba(0, 109, 146, 0.38);
        padding: 10px;
      }
      
      .info {
        margin-bottom: 20px;
      }
      
      .translations {
        margin-bottom: 40px;
      }
      
      .translations label {
        margin-bottom: 2px;
      }
      
      .translations input, .translations textarea {
        width: 100%;
      }
      
      .translations div {
        margin-bottom: 5px;
      }
      
      #downloadLink {
        visibility: hidden;
      }
    `
    ]
})
export class TranslateLittleHelperComponent implements OnInit {

    keysVisible$: Observable<boolean>;
    private _notTranslatedOnly: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    notTranslatedOnly$: Observable<boolean> = this._notTranslatedOnly.asObservable();
    translations$: Observable<Translation[]>;

    @ViewChild("downloadEl") downloadEl: ElementRef;

    constructor(public helper: TranslateLittleHelperService) {
    }

    ngOnInit() {
        this.keysVisible$ = this.helper.keysVisible$;
        this.translations$ = this.helper.translations$
            .combineLatest(this.notTranslatedOnly$)
            .map(([translations, notTranslatedOnly]) => {
                if (notTranslatedOnly) {
                    return translations.filter(tr => {
                        return !tr.value || tr.value !== tr.originalValue;
                    });
                } else {
                    return translations;
                }
            })
            .map(translations => translations.sort((tr1, tr2) => tr1.key.localeCompare(tr2.key)));
    }

    reload() {
        this.helper.reload();
    }

    toggleKeysVisible() {
        this.helper.toggleKeysVisible();
    }

    toggleFilter(filterOn) {
        this._notTranslatedOnly.next(filterOn);
    }

    save() {
        this.helper.save()
            .subscribe();
    }

    download() {
        this.helper.getTranslationsAsJson(this.helper.getCurrentLang()).subscribe(translations => {
            let nativeElement = this.downloadEl.nativeElement;
            nativeElement.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(translations));
            nativeElement.download = `${this.helper.getCurrentLang()}.json`;
            nativeElement.click();
        });
    }


}
