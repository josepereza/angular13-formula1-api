import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class PipesPipe implements PipeTransform {

  transform(value: any): any {
    if (value !== undefined){value="nada"}else {value="algo"}
    return value;
  }

}
