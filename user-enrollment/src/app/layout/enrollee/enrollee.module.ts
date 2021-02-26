import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolleeRoutingModule } from './enrollee-routing.module';
import { EnrolleesComponent } from './components/enrollees/enrollees.component';
import { TableModule } from 'primeng/table';
import { CreateEnrolleeComponent } from './components/create-enrollee/create-enrollee.component';
import { EditEnrolleeComponent } from './components/edit-enrollee/edit-enrollee.component';
import { ViewEnrolleeComponent } from './components/view-enrollee/view-enrollee.component';

@NgModule({
  declarations: [EnrolleesComponent, CreateEnrolleeComponent, EditEnrolleeComponent, ViewEnrolleeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TableModule,
    EnrolleeRoutingModule
  ],
  entryComponents: [
    EditEnrolleeComponent,
    ViewEnrolleeComponent
  ]
})
export class EnrolleeModule { }
