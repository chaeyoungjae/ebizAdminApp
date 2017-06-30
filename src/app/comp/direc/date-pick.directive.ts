import {Directive, ElementRef, Input} from '@angular/core';
declare var jQuery : any;
@Directive({
  selector: '[appDatePick]'
})
export class DatePickDirective {
  @Input() options : Object = {};
  constructor(private elementRef : ElementRef) {
    if (jQuery().datepicker) {
      jQuery(this.elementRef).datepicker({
        orientation: "left",
        autoclose: true
      });
    }
  }
}
