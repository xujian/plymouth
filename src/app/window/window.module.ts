import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { WindowRoutingModule } from './window-routing.module';



@NgModule({
  declarations: [
    MasterLayoutComponent,
    TitlebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    WindowRoutingModule,
  ]
})
export class WindowModule { }
