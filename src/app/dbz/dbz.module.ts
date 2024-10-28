import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';
import { MainPageComponent } from './pages/main-page.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    CharacterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
