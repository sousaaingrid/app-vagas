import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { LoginComponent } from './components/login/login.component';
import { VagasListaComponent } from './components/vagas-lista/vagas-lista.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"vagas", component: VagasComponent},
  {path:"vagas/lista", component: VagasListaComponent},
  {path:"inscricao", component: InscricaoComponent, canActivate:[AuthGuardGuard]},
  {path: "login", component: LoginComponent},
  {path: "erro", component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
