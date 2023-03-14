import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter',
})
export class JobFilterPipe implements PipeTransform {
  transform(values: any, form: any): any {
    if (form.experience == '' && form.location == '' && form.position == '') {
      return values;
    } 
    else {
      let result = values;

      if (form.experience != '') {
        result = result.filter( (job : any) => job.experience.toLowerCase() == form.experience.toLowerCase())
      }
      if (form.location != '') {
        result = result.filter( (job : any  ) => job.location.toLowerCase() == form.location.toLowerCase())
      }
      if (form.position != '') {
        result = result.filter( (job : any) => job.position.toLowerCase() == form.position.toLowerCase())
      }
      console.log(result);
      return result;
    }
  }
}
