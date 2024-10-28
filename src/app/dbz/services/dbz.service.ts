import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable(
  {providedIn: 'root'

  })
export class DbzService {

  public characters: Character [] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
    transformations: 5
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500,
    transformations: 12
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500,
    transformations: 23
  }
];

  // onNewCharacter( Character : Character ):void {
  //   console.log( 'MainPage' );
  //   console.log( Character );
  //   this.characters.push(Character);

  // const newCharacter: Character = { id: uuid(), ...Character }
  // this.characters.push(Character);

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
    }

  //onDeleteCharacter( index:number ) {
    //console.log( {index} );
  //  this.characters.splice(index,1);
  deleteCharacterById (id:string) {
    this.characters = this.characters.filter (character => character.id !== id);
  }

}



