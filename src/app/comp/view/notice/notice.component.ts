import { Component, OnInit } from '@angular/core';
declare const $ : any;
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    $("#sample_1").DataTable();
  }
}
