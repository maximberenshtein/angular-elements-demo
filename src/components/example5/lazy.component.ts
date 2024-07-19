import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div style="margin: 20px; border: 1px solid black">
    I am component in lazy chunk
    </div>
  `,
})
export class LazyComponent {}
