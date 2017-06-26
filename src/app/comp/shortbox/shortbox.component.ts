import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shortbox',
  templateUrl: './shortbox.component.html',
  styleUrls: ['./shortbox.component.css']
})
export class ShortboxComponent implements OnInit {
  @Input() title : string;
  @Input() icon  : string;
  @Input() cnt   : number;
  @Input() unit  : string;
  @Input() percent : number;
  @Input() color2 : string;
  constructor() { }

  ngOnInit() {
    console.log(this.color2);
  }
}
