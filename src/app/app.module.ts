import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SanitizationExampleComponent } from './sanitization-example/sanitization-example.component';
import { AppRoutingModule } from './app-routing.module';
import { Header2Component } from './header2/header2.component';

@NgModule({ // NgModules declare each thing created in Angular and group them together
  declarations: [ // Things that will be used in templates (usually components)
    AppComponent,
    SanitizationExampleComponent,
    Header2Component
  ],
  imports: [ // for getting other modules :) 
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [], //Services (classes that get and handle data)
  bootstrap: [AppComponent]
})

export class AppModule { }
