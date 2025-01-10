import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/main-page.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

    @Input()
    public charactersList: Character[] = [{
      name: 'Trunks',
      power:5
    }];

    @Output()
    public onDeleteIndexCharacter: EventEmitter<string> = new EventEmitter();

    deleteItemsById(id : string | undefined) : void{
      this.onDeleteIndexCharacter.emit(id);
   }

 }
