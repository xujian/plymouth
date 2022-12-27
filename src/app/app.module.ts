import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'
import { WindowModule } from './window/window.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/icons.json'
    }),
    CoreModule,
    SharedModule,
    WindowModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
