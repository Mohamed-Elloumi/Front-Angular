import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmedDialogueComponent } from './confirmed-dialogue/confirmed-dialogue.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
   MemberComponent,
   MemberFormComponent,
   ConfirmedDialogueComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
