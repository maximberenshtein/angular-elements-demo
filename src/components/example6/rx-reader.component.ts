import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  template: `
    <h2>Read subjct</h2>

    rxSubject$ = {{rxSubject$ | async}}
  `,
  imports: [AsyncPipe],
})
export class RxReaderComponent {
  rxSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    (window as any).rxSubject$ = this.rxSubject$;
  }
}
