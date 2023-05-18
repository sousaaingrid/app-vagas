import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { ErroComponent } from './components/erro/erro.component';
import { VagasListaComponent } from './components/vagas-lista/vagas-lista.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { LoginComponent } from './components/login/login.component';
import { SublistaPipe } from './pipes/sublista.pipe';
import { RodapeComponent } from './components/rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    VagasComponent,
    ErroComponent,
    VagasListaComponent,
    InscricaoComponent,
    LoginComponent,
    SublistaPipe,
    RodapeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
