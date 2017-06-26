import { Component, OnInit } from '@angular/core';
import {Setting, SettingService} from "../../../../service/setting.service";

@Component({
  selector: 'app-alram',
  templateUrl: './alram.component.html',
  styleUrls: ['./alram.component.css'],
  providers : [SettingService]
})
export class AlramComponent implements OnInit {
  setting : Array<Setting> = [];
  constructor(private settingService : SettingService) {
    this.setting = this.settingService.getSetting();
  }
  ngOnInit() {
  }

}
