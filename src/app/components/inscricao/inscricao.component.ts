import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent {
  
  constructor(private router: Router,) {}
  
  fechar(): void {
    this.router.navigate(['vagas']);
  }

}
