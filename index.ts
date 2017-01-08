import {NgModule, ModuleWithProviders} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TranslateLittleHelperComponent} from "./src/translate-little-helper.component";
import {TranslateLittleHelperService, TranslateLittleHelperConfig} from "./src/translate-little-helper.service";
import {Router} from "@angular/router";
import {TranslateService} from "ng2-translate";

export {Translation} from "./src/translation";
export {TranslateLittleHelperService, TranslateLittleHelperConfig} from "./src/translate-little-helper.service";


@NgModule({
    declarations: [
        TranslateLittleHelperComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    entryComponents: [
        TranslateLittleHelperComponent
    ],
    exports: [
        TranslateLittleHelperComponent
    ]
})
export class NgTranslateLittleHelperModule {

    static forRoot(config: TranslateLittleHelperConfig): ModuleWithProviders {
        return {
            ngModule: NgTranslateLittleHelperModule,
            providers: [
                {
                    provide: TranslateLittleHelperConfig,
                    useValue: config
                },
                TranslateLittleHelperService
                ]
        };
    }

}
