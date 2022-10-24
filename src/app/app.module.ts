import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocViewerModule } from './components/bloc-viewer/bloc-viewer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
