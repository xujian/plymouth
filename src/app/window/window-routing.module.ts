import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MasterLayoutComponent } from './master-layout/master-layout.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WindowRoutingModule { }
