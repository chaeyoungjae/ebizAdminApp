import {Directive, ElementRef, EventEmitter, Input, Output, AfterContentInit} from '@angular/core';
declare var $ : any;
@Directive({
  selector: '[appDatePick]'
})
export class DatePickDirective {
  @Input() options : Object = {};
  @Input() btnIdss : string;
  constructor(private elementRef : ElementRef) {
    if ( !this.options.hasOwnProperty("dateFormat") ) this.options['dateFormat'] = "yy-mm-dd";
      $(this.elementRef.nativeElement).datepicker(this.options);
  }
  ngAfterContentInit(){
    let el = this.elementRef.nativeElement;
    if ( this.btnIdss != null )
      $("#" + this.btnIdss).click(function() {
        $(el).datepicker('show');
      });
  }
}
