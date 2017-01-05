import {NgModule, ModuleWithProviders} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TranslateCompanionComponent} from "./src/translate-companion.component";
import {TranslateCompanionService, TranslateCompanionConfig} from "./src/translate-companion.service";
import {Router} from "@angular/router";
import {TranslateService} from "ng2-translate";

export {Translation} from "./src/translation";
export {TranslateCompanionService, TranslateCompanionConfig} from "./src/translate-companion.service";


@NgModule({
    declarations: [
        TranslateCompanionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    entryComponents: [
        TranslateCompanionComponent
    ],
    exports: [
        TranslateCompanionComponent
    ]
})
export class MsKawasakiModule {

    static forRoot(config: TranslateCompanionConfig): ModuleWithProviders {
        return {
            ngModule: MsKawasakiModule,
            providers: [
                {
                    provide: TranslateCompanionConfig,
                    useValue: config
                },
                TranslateCompanionService
                ]
        };
    }

}
