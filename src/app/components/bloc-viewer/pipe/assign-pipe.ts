import { Pipe, PipeTransform } from '@angular/core';




@Pipe({ name: 'assignSide' })
export class AssignPipe implements PipeTransform {
  transform(value: any, key: string, container: any) {
    console.log('assignement');
    container[key] = value;
    return value;
  }
  /*transform(allPositions: PositionItem[]) {
      return allPositions.map(pos => pos.name).join(',');
  }*/
}
