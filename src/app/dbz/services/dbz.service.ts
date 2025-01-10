import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/main-page.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public characters: Character[] = [{
        id: uuid(),
        name : 'Goku',
        power: 200
     },{
        id: uuid(),
        name: 'Frezerr',
        power: 2000
     },
     {
        id: uuid(),
        name: 'Vegueta',
        power: 200
     }];

     public onNewCharacterr(character: Character): void{        
        const newCharacter: Character = {id: uuid(), ...character};
        this.characters.push(newCharacter);
     }
     
     public onDeleteCharacter(index:number):void{
         this.characters.splice(index, 1);
     }

     public onDeleteCharacterById(id: string): void{
        this.characters = this.characters.filter(x => x.id != id);
     }
}