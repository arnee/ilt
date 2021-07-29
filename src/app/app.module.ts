import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular NDBX Imports */
import { NdbxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxButtonModule } from '@aposin/ng-aquila/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NdbxIconModule,
    NxHeaderModule,
    NxImageModule,
    NxLinkModule,
    NxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
