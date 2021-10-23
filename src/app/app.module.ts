import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TreeOfLifeDropdownComponent } from './tree-of-life-dropdown/tree-of-life-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeOfLifeDropdownComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
