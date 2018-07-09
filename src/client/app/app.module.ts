import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

const BASE_HREF = ('<%= APP_BASE %>'.indexOf('= APP_BASE') >= 0) ? '/' : '<%= APP_BASE %>';

@NgModule({
  imports: [BrowserModule, CoreModule,
    HttpClientModule, AppRoutingModule,
    AboutModule, HomeModule,
    SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: BASE_HREF
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
