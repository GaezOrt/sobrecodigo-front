import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(values: [], args: string): [] {
    let filtrado = [];
    for (let value of values) {
     if( value == args ) 
      {
        filtrado.push(value);
      } 
    }
    return [];
  }

}
