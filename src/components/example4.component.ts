import { Component, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="wrapper">
      <div class="column left">
        <ng-content select="[left]"></ng-content>
      </div>

      <div class="column right">
        <ng-content select="[right]"></ng-content>
      </div>
    </div>

    <br/>
    <br/>


    <ng-content></ng-content>
  `,
  styles: `
    .wrapper {
      display: flex;
      justify-content: space-between;
    }
    

    .column {
      border: 1px solid black;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;
    }

    .left {
      --color: #673ab7;
    }

    .right {
      --color: red;
    }
  `,
})
export class LayoutComponent {
  constructor(private elt: ElementRef) {}

  ngAfterViewInit() {
    var textNode = this.elt.nativeElement.childNodes[4].childNodes[0];

    textNode.innerHTML = 'Read data from NO window';
  }
}
