import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogCell } from './app.component';
import { NumToArrPipe } from './num-to-arr.pipe';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  } from '@angular/material/button'
  import { MatBadgeModule } from '@angular/material/badge'
  import { MatFormFieldModule } from '@angular/material/form-field';
  import {  MatInputModule } from '@angular/material/input';
  import{MatButtonToggleModule } from '@angular/material/button-toggle'
  import {MatToolbarModule} from '@angular/material/toolbar';
  import { MatIconModule } from "@angular/material/icon";
  import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NumToArrPipe,
    DialogCell
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[MatIconModule,MatButtonModule,BrowserAnimationsModule,MatSlideToggleModule,MatDialogModule,MatFormFieldModule,MatInputModule,FormsModule,MatToolbarModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,BrowserAnimationsModule,MatSlideToggleModule,MatDialogModule,MatFormFieldModule,MatInputModule,FormsModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
