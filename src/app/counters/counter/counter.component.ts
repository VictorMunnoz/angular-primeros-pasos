import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;


  increaseBy(num:number):void{
    this.counter += num;
  }

  resetNumber():void{
    this.counter = 10;
  }
}