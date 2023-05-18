import { Pipe, PipeTransform } from '@angular/core';
import { ResumoVaga } from '../interfaces/resumo-vaga';

@Pipe({
  name: 'sublista'
})
export class SublistaPipe implements PipeTransform {

  transform(vagas: ResumoVaga[], input: string): ResumoVaga[] {
    if(!input){
      return vagas;
    }else {
      return vagas.filter(v => v.cidade.toLowerCase().includes(input.toLowerCase()));
    }
  }
}
