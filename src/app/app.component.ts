import {Component, computed, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter = signal<number>(0);

  isEven = computed<string>
  (() => this.counter() % 2 === 0 ? 'Even': 'Odd')

  name = signal<string>('Eliran');

  plus() {
    this.counter.update(c => c + 1);
  }

  changeName() {
    this.name.set('Yanai');
  }

  constructor() {
    effect(() => {
      console.log('Counter is' , this.counter(), this.name())
    });
  }
}
