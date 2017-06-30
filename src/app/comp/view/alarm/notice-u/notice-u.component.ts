import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-u',
  templateUrl: './notice-u.component.html',
  styleUrls: ['./notice-u.component.css']
})
export class NoticeUComponent implements OnInit {
  public options : Object = {
    placeholderText: 'Edit Your Content Here!',
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
    toolbarVisibleWithoutSelection: false,
    immediateAngularModelUpdate : true,
    theme : 'royal'
  }
  constructor() { }

  ngOnInit() {
  }

}
