import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MasterLayoutComponent } from './master-layout/master-layout.component'
import { TitlebarComponent } from './titlebar/titlebar.component'
import { BrowserModule } from '@angular/platform-browser'
import { WindowRoutingModule } from './window-routing.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    MasterLayoutComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    WindowRoutingModule,
    SharedModule,
    CommonModule,
  ]
})
export class WindowModule { }
