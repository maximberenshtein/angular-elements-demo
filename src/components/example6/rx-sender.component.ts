import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

type Window = {
  rxSubject$: BehaviorSubject<string>;
};

@Component({
  standalone: true,
  template: `
    <h2>Send data in subject</h2>
    
    <input [(ngModel)]="name" (ngModelChange)="sendName()">
  `,
  imports: [FormsModule],
})
export class RxSenderComponent {
  name: string = '';

  sendName() {
    (window as unknown as Window).rxSubject$.next(this.name);
  }
}
