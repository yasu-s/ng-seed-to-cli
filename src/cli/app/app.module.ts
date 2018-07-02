import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomInterceptor, LogInterceptor } from './ext';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
