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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
 // Ensure this path is correct
import { ToolComponent } from './tool/tool.component';
import { EventComponent } from './event/event.component';
import { ArticleComponent } from './article/article.component';
import { MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ConfirmedDialogueComponent } from './confirmed-dialogue/confirmed-dialogue.component';
import { ModalEventComponent } from './modal-event/modal-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PubDetailsComponent } from './pub-details/pub-details.component';
import { PubModalComponent } from './pub-modal/pub-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmedDialogueComponent,
    TemplateComponent,
    DashboardComponent,
    ToolComponent,
    EventComponent,
    ArticleComponent,
    ModalEventComponent,
    PubDetailsComponent,
    PubModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    NgChartsModule,
   
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }