import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(collection: any[], fldName: string, fldVal: string): any[] {
    if(!collection){
      return [];
    }
    if(!fldName || !fldVal){
      return collection;
    }

    return collection.filter(item => item[fldName].includes(fldVal));
    
  }

}
