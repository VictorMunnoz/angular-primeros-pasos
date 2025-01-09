import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
  public name: string ='Spiderman';
  public Age: number = 31;
  public Metodo: string = 'Algun metodo';
}