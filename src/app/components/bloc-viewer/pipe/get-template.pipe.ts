
import { Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { IBLocItem } from '../model/bloc-viewer.model';




@Pipe({ name: 'getTemplate' })
export class GetTemplatePipe implements PipeTransform {
  transform(template: TemplateRef<any>, blocItems: IBLocItem[], blocId: string) {
    this.assignement(template, blocItems, blocId);
    return template; // just returnign same as input
  }

  private assignement(template: TemplateRef<any>, blocItems: IBLocItem[], blocId: string) {
    const find = blocItems.find(item => {
      return item.dataId !== undefined && item.dataId === blocId;
    });
    if (find) {

      find.template = template;
      console.log(find);
    }
  }
}


