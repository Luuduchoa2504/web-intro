import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from "../modules";

const sharedModule = [
  FormsModule,
  ReactiveFormsModule, 
]

@NgModule({
  exports: [
    ...sharedModule,
    MaterialModule
  ],
  declarations: [],
  imports: [
    ...sharedModule,
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
