import {
  Component,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Component({
  standalone: true,
  template: `<ng-template #outletRef></ng-template>`,
})
export class LazyWrapperComponent implements OnInit {
  private readonly injector = inject(Injector);

  @ViewChild('outletRef', { read: ViewContainerRef })
  public outletRef!: ViewContainerRef;

  ngOnInit(): void {
    import('./lazy.component').then((module) => {
      this.outletRef.createComponent(module.LazyComponent, {
        injector: this.injector,
      });
    });
  }
}
