import {Directive, ElementRef, Input} from '@angular/core';
declare var jQuery : any;
@Directive({
  selector: '[appDatePick]'
})
export class DatePickDirective {
  @Input() options : Object = {};
  constructor(private elementRef : ElementRef) {
    jQuery(this.elementRef).date
  }

}
