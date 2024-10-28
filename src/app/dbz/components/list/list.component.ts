import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Asegúrate de que esté escrito correctamente
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '1',
    name: 'Trunks',
    power: 10,
    transformations: 1 // Agrega esta propiedad según lo requerido en la interfaz
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string | undefined): void {
    if (id) {
      this.onDelete.emit(id);
    } else {
      console.error('El ID es indefinido, no se puede eliminar el personaje.');
    }
  }
}

