import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Host]',
})
export class WidgetDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}