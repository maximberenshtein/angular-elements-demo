import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';

import { InputOutputComponent } from './components/example1.component';
import { RxSenderComponent } from './components/example6/rx-sender.component';
import { RxReaderComponent } from './components/example6/rx-reader.component';
import { ReadWindowComponent } from './components/example3.component';
import { LayoutComponent } from './components/example4.component';
import { MediaqueryComponent } from './components/example2.component';
import { LazyWrapperComponent } from './components/example5/lazy-wrapper.component';
import 'zone.js';

(async () => {
  const app = await createApplication({
    providers: [],
  });

  // добавление нового компонента
  const customElement = createCustomElement(InputOutputComponent, {
    injector: app.injector,
  });

  customElements.define('in-out-component', customElement);

  // добавление остальных компонентов
  // addCustomElement(InputOutputComponent, 'in-out-component');
  addCustomElement(LazyWrapperComponent, 'lazy-wrapper-component');
  addCustomElement(ReadWindowComponent, 'window-reader-component');
  addCustomElement(LayoutComponent, 'layout-component');
  addCustomElement(MediaqueryComponent, 'mediaquery-component');

  addCustomElement(RxSenderComponent, 'rx-sender-component');
  addCustomElement(RxReaderComponent, 'rx-reader-component');

  function addCustomElement(component: any, name: string) {
    const element = createCustomElement(component, {
      injector: app.injector,
    });
    customElements.define(name, element);
  }
})();
