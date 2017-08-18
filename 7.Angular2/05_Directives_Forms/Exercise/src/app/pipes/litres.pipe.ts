import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'litres'
})

export class LitresPipe implements PipeTransform{
  transform(value: number) {
    return value + ' Litres';
  }
}
