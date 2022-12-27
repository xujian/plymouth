import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AngularSvgIconModule } from 'angular-svg-icon'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  exports: [
    AngularSvgIconModule
  ]
})
export class SharedModule { }
