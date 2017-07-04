import {Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
declare var $ : any;
@Directive({
  selector: '[appDatePick]'
})
export class DatePickDirective {
  @Input() options : Object = {};
  constructor(private elementRef : ElementRef) {
    console.log($(this.elementRef.nativeElement).html());
    console.log($(this.elementRef.nativeElement).find("input"));
    $(this.elementRef.nativeElement).find("input").datepicker();
    //$(this).parent('.input-group').find('.timepicker').timepicker('showWidget');
  }
}
