import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';  // Importa DbzModule

@NgModule({
  declarations: [
    AppComponent  // Declarar solo componentes propios de este módulo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule  // Importa DbzModule que ya contiene CharacterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

