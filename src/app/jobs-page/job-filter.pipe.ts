import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter',
})
export class JobFilterPipe implements PipeTransform {
  transform(values: any, form: any): any {
    if (form.experiencia == '' && form.ubicacion == '' && form.posicion == '') {
      return values;
    } 
    else {
      let result = values;

      if (form.experiencia != '') {
        result = result.filter( (job : any) => job.experiencia.toLowerCase() == form.experiencia.toLowerCase())
      }
      if (form.ubicacion != '') {
        result = result.filter( (job : any  ) => job.ubicacion.toLowerCase() == form.ubicacion.toLowerCase())
      }
      if (form.posicion != '') {
        result = result.filter( (job : any) => job.posicion.toLowerCase() == form.posicion.toLowerCase())
      }
 
      return result;
    }
  }
}
