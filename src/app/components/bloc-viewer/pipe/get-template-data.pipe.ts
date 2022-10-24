
import { Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { IBLocItem } from '../model/bloc-viewer.model';




@Pipe({ name: 'getTemplateData' })
export class GetTemplateDataPipe implements PipeTransform {
  transform(item: IBLocItem, dataIdKey: string, data: any[]) {
    return this.getItem(item, dataIdKey, data);
  }

  private getItem(item: IBLocItem, dataIdKey: string, data: any[]) {
    const find = data.find(dataItem => {
      return dataItem[dataIdKey] !== undefined && dataItem[dataIdKey] === item.dataId;
    });
    return find;
  }
}
