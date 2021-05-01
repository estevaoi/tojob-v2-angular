import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeuPainelComponent } from './controller/meu-painel/meu-painel.component';
import { HomeComponent } from './controller/home/home.component';
import { MenuPainelComponent } from './components/menu-painel/menu-painel.component';
import { SairComponent } from './controller/sair/sair.component';
import { DadosPessoaisComponent } from './controller/dados-pessoais/dados-pessoais.component';
import { MensagensComponent } from './controller/mensagens/mensagens.component';
import { DadosProfissionaisComponent } from './controller/dados-profissionais/dados-profissionais.component';
import { CandidaturasComponent } from './controller/candidaturas/candidaturas.component';
import { AssinaturasComponent } from './controller/assinaturas/assinaturas.component';
import { VagasComponent } from './controller/vagas/vagas.component';
import { ParaRecrutadoresComponent } from './controller/para-recrutadores/para-recrutadores.component';
import { ParaCanditadosComponent } from './controller/para-canditados/para-canditados.component';
import { CurriculosComponent } from './controller/curriculos/curriculos.component';
import { ConfiguracoesComponent } from './controller/configuracoes/configuracoes.component';
import { MainFooterComponent } from './controller/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MeuPainelComponent,
    HomeComponent,
    MenuPainelComponent,
    SairComponent,
    DadosPessoaisComponent,
    MensagensComponent,
    DadosProfissionaisComponent,
    CandidaturasComponent,
    AssinaturasComponent,
    VagasComponent,
    ParaRecrutadoresComponent,
    ParaCanditadosComponent,
    CurriculosComponent,
    ConfiguracoesComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
