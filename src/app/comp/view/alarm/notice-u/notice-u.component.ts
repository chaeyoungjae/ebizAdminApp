import { Component, OnInit } from '@angular/core';
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-notice-u',
  templateUrl: './notice-u.component.html',
  styleUrls: ['./notice-u.component.css']
})
export class NoticeUComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
  public options : Object = {
    placeholderText: 'Edit Your Content Here!',
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
    toolbarVisibleWithoutSelection: false,
    immediateAngularModelUpdate : true,
    theme : 'royal'
  }
  public dateOption : Object = {
  }
  public uploader:FileUploader = new FileUploader({url: ""});
  public hasBaseDropZoneOver:boolean = false;
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
}
