import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
title: String = 'Conunter usando redux!';
counter: number = 0;

constructor(private store: Store<{counter: number}>){
  this.store.select('counter').subscribe(counter => {
    this.counter = counter;
  })
}

increment(): void{
  this.store.dispatch(increment({add: 2}));
}

decrement(): void{
  this.store.dispatch(decrement());
}

reset(): void{
  this.store.dispatch(reset());

}
}
