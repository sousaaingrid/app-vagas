//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumoVaga } from 'src/app/interfaces/resumo-vaga';
//import { Vaga } from 'src/app/interfaces/vaga';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-vagas-lista',
  templateUrl: './vagas-lista.component.html',
  styleUrls: ['./vagas-lista.component.css']
})
export class VagasListaComponent implements OnInit {
  constructor( 
    // private route: ActivatedRoute, 
    private router: Router, 
    private vagasService: VagasService ) {}
 
 

  vagas: ResumoVaga[] = [];
  // vaga!: Vaga;
  // salario!: string;

  ngOnInit(): void {
    //this.vagasService.getVagasApi().subscribe(resposta => this.vagas = resposta);
    this.vagasService.getResumoVagas().subscribe(res => this.vagas = res);
    // this.salario = this.route.snapshot.paramMap.get('salario') as string;
    // this.vagasService.getVagaApi(parseInt(this.salario))
    // .subscribe((res) => this.vaga =res);
    
  }


  //salarioBuscado!: number;

 // public encontrarSalario(s : number): void {this.vagasService.encontrar(this.salarioBuscado).subscribe(resposta => this.vagas = resposta)} 

  //salarioBuscado(){
   // this.vagasService.encontrar().subscribe(resposta => this.salario = resposta);
    
 // }

  inscricao(): void {
    this.router.navigate(['inscricao']);
  }

  fechar(): void {
    this.router.navigate(['vagas']);
  }

}
