import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaModule } from './lista/lista.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ListViewComponent } from './list-view/list-view.component';
//import { InputComponent } from './lista/input/input.component';

@NgModule({
  declarations: [ // componentes, diretivas e pipes
    AppComponent //, ListViewComponent
  ],
  imports: [ // modulos
    BrowserModule,
    AppRoutingModule,
    ListaModule,
  ],
  exports: [ // componentes, diretivas e pipes de poderão ser importadas externamente

  ],
  providers: [], // injeções de dependências e services
  bootstrap: [AppComponent] // componentes que serão automaticamente inicializados (como o método main)
})
export class AppModule { }
