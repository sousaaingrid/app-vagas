import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent{ 
  
  
  constructor(private router: Router) {}

  
  listaVaga(): void{
  this.router.navigate(['vagas/lista']);
  }

}
