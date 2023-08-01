import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TranscoderComponent} from './transcoder/transcoder.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {DialogFilterCreateUpdate} from "./dialogs/create-update/dialog-filter-create-update";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogFilterRemove} from "./dialogs/remove/dialog-filter-remove";
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    AppComponent,
    TranscoderComponent,
    DialogFilterCreateUpdate,
    DialogFilterRemove
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatDatepickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
