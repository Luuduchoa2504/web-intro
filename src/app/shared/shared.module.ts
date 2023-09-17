import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from "../modules";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";

const sharedModule = [
  FormsModule,
  ReactiveFormsModule,
];

const NGX_MODULE = [
  NgxSpinnerModule,
  ToastrModule.forRoot(),
] ;

@NgModule({
  exports: [
    NgxSpinnerModule,
    ...sharedModule,
    MaterialModule,
  ],
  declarations: [],
  imports: [
    ...NGX_MODULE,
    ...sharedModule,
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule { }
