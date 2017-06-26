import {Http, RequestOptions, URLSearchParams} from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
declare var moment: any;

export class Setting {
  constructor (
    public name : string,
    public icon : string,
    public url  : string,
    public noread : number,
    public list : SettingDetail[]
  ) {

  }
}
export class SettingDetail {
  constructor (
    public time : string,
    public icon  : Icon,
    public photo : Photo,
    public percent : Percent,
    public data : string
  ) {

  }
}
export class Photo {
  constructor (
    public img  : string,
    public from : string,
    public to   : string
  ) {

  }
}
export class Icon {
  constructor (
    public name  : string,
    public color : string
  ) {

  }
}
export class Percent {
  constructor (
    public data  : string,
    public color : string
  ) {

  }
}
@Injectable()
export class SettingService {
  constructor(private http : Http) {

  }
  getSetting() : any {
    return settingData;
  }
}
var settingData = [{
  "name"    : "notification",
  "icon"    : "bell",
  "noread"  : "7",
  "listCnt" : "12",
  "list"    : [{
    "time"  : "just now",
    "icon"  : {
      "name" : "plus",
      "color": "success"
    },
    "data"  : "New user registered"
  },{
    "time"  : "3 mins",
    "icon"  : {
      "name" : "bolt",
      "color": "danger"
    },
    "data"  : "Server #12 overloaded"
  }]
},{
  "name"    : "inbox",
  "icon"    : "envelope-open",
  "noread"  : "4",
  "listCnt" : "7",
  "list"    : [{
    "time"  : "just now",
    "photo" : {
      "img"  : "/assets/layouts/layout3/img/avatar2.jpg",
      "from" : "Richard Doe"
    },
    "data" : "Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh..."
  },{
    "time"  : "2 hr",
    "photo" : {
      "img" : "/assets/layouts/layout3/img/avatar2.jpg",
      "from" : "Lisa Wong"
    },
    "data" : "Vivamus sed auctor 40% nibh congue nibh..."
  }]
},{
  "name"    : "tasks",


  "icon"    : "calendar",
  "noread"  : "3",
  "listCnt" : "12",
  "list" : [{
    "data" : "New release v1.2",
    "percent" : {
      "color" : "warning",
      "data"  : "30"
    }
  },{
    "data" : "Application deployment",
    "percent" : {
      "color" : "danger",
      "data"  : "65"
    }
  },{
    "data" : "Application deployment",
    "percent" : {
      "color" : "info",
      "data"  : "90"
    }
  }]
}]
