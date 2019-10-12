import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    ListItemComponent,
    ItemEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
