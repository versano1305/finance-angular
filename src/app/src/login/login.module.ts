import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
