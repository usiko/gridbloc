import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMasonryModule } from 'ngx-masonry';
import { MaximizableBlocModule } from '../maximizable-bloc/maxmizable-bloc.module';
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
    NgxMasonryModule,
    MaximizableBlocModule
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
