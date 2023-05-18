import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumoVaga } from '../interfaces/resumo-vaga';
import { Vaga } from '../interfaces/vaga';


@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }


  baseUrl: string = "https://localhost:7274/api/vagas";

  public getResumoVagas() : Observable<ResumoVaga[]> {
    return this.http.get<ResumoVaga[]>(this.baseUrl)
  }
 
 
 
  public getVagasApi() : Observable<Vaga[]>{
    return this.http.get<Vaga[]>(this.baseUrl);
  }

//   public getVagaApi(salario:number) : Observable<Vaga> {
//    const url = `${this.baseUrl}/${salario}`;
//     return this.http.get<Vaga>(url);
// }
  
}
