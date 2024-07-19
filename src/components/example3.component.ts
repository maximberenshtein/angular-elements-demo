import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h2>Read data from window</h2>
    <br/>
    window.someData = {{windowData | json}}
    <br/>
    globalThis.someData = {{globalThisData | json}}
    <br/>
  `,
  imports: [JsonPipe],
})
export class ReadWindowComponent implements OnInit {
  globalThisData: any = null;
  windowData: any = null;

  ngOnInit(): void {
    this.globalThisData = (globalThis as any)?.thisData;
    this.windowData = (window as any)?.windowData;
  }
}
