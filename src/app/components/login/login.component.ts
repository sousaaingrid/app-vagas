import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { UsuariosService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, 
    private usuariosService: UsuariosService ) {}

    user!: Usuario;
    erro!: string;
    storage: Storage = localStorage;
  
  ngOnInit(): void {
    this.user = new Usuario();
    this.storage.removeItem('user_name');
    
  }
 fechar() : void{
  this.router.navigate(['/inscricao']);
 }

 validar(usuario: Usuario) : void {

  this.usuariosService.postUsuarioApi(usuario).subscribe(res => {
    console.log(res);
    if(res){
      this.storage.setItem('user_name', usuario.nome);
    } else {
      this.erro = "Usuário ou senha inválidos";
    }
 });
  
 
 // let valida : boolean = this.usuariosService.usuarios.includes(usuario.nome);

  // if(valida && usuario.senha =='admin') {
  //   this.storage.setItem('user_name', usuario.nome);
  //   this.fechar();
  // } else {
  //   this.erro = "Usuário ou senha inválidos";
  // }
 }

}
