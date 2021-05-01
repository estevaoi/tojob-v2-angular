import { AssinaturasComponent } from './controller/assinaturas/assinaturas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controller/home/home.component';
import { MeuPainelComponent } from './controller/meu-painel/meu-painel.component';
import { SairComponent } from './controller/sair/sair.component';
import { VagasComponent } from './controller/vagas/vagas.component';
import { CandidaturasComponent } from './controller/candidaturas/candidaturas.component';
import { DadosPessoaisComponent } from './controller/dados-pessoais/dados-pessoais.component';
import { DadosProfissionaisComponent } from './controller/dados-profissionais/dados-profissionais.component';
import { CurriculosComponent } from './controller/curriculos/curriculos.component';
import { ParaCanditadosComponent } from './controller/para-canditados/para-canditados.component';
import { ParaRecrutadoresComponent } from './controller//para-recrutadores/para-recrutadores.component';
import { MensagensComponent } from './controller/mensagens/mensagens.component';
import { ConfiguracoesComponent } from './controller/configuracoes/configuracoes.component';
import { MainFooterComponent } from './controller/main-footer/main-footer.component';
 


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meu-painel', component: MeuPainelComponent },
  { path: 'assinaturas', component: AssinaturasComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'sair', component: SairComponent },
  { path: 'candidaturas', component: CandidaturasComponent },
  { path: 'dados-pessoais', component: DadosPessoaisComponent},
  { path: 'dados-profissionais', component: DadosProfissionaisComponent },
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'para-canditados', component: ParaCanditadosComponent },
  { path: 'para-recrutadores', component: ParaRecrutadoresComponent},
  { path: 'mensagens', component: MensagensComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent},
  { path: 'main-footer', component: MainFooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
