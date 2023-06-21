import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { MyInfoButtonComponent } from './my-info-button/my-info-button.component';
import { OutcomeComponent } from './outcome/outcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MyButtonComponent,
    MyInfoComponent,
    MyInfoButtonComponent,
    OutcomeComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
