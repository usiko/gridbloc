import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';
import { BlocViewerComponent } from './bloc-viewer.component';
import { GetTemplateDataPipe } from './pipe/get-template-data.pipe';
import { GetTemplatePipe } from './pipe/get-template.pipe';

@NgModule({
  declarations: [
    GetTemplatePipe,
    GetTemplateDataPipe,
    BlocViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMasonryModule
  ],
  exports: [
    BlocViewerComponent,
    GetTemplatePipe,
    GetTemplateDataPipe,
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: []
})
export class BlocViewerModule { }
