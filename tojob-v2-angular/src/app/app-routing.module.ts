import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controller/home/home.component';
import { MeuPainelComponent } from './controller/meu-painel/meu-painel.component';
import { SairComponent } from './controller/sair/sair.component';
import {VagasComponent} from './controller/vagas/vagas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meu-painel', component: MeuPainelComponent },
  { path: 'sair', component: SairComponent },
  { path: 'vagas', component: VagasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
