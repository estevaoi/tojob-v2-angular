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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MeuPainelComponent,
    HomeComponent,
    MenuPainelComponent,
    SairComponent
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
