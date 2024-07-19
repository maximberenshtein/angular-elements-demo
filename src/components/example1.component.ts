import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // а где селектор?
  standalone: true,
  template: `
    <h1>Custom component counter {{ counter }}!</h1>

    <button (click)="sendOutput()">sendOutput</button>
  `,
})
export class InputOutputComponent {
  @Input() counter!: null;

  @Output() sendOut = new EventEmitter<string>();

  sendOutput() {
    this.sendOut.emit(
      `Counter value is ${this.counter}

counter type is ${typeof this.counter}`
    );
  }
}
