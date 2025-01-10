import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/main-page.interface';

@Component({
    selector: 'add-character-dbz',
    templateUrl: './addcharacter.component.html'
})

export class AddCharacterComponent{
    
    public character: Character = {
        name: '',
        power:0
    };

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    emitirCharacter(): void{

        if(this.character.name.length === 0) return;

        this.onNewCharacter.emit({...this.character});

        this.character.name = '';
        this.character.power = 0;
    }
}