import { Component, OnInit, Input } from '@angular/core';
import {Order} from "../../service/order.service";

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css']
})
export class ShortlistComponent implements OnInit {
  @Input() type : string;
  @Input() mainList : Order[];
  typeName : string;
  filterBy : boolean;
  constructor() {
  }
  ngOnInit() {
    switch(this.type) {
      case "orderlist" : {
        this.typeName = "주문내역";
        this.filterBy = true;
        this.mainList = this.mainList.filter(element => element.state === "배송준비" || element.state === "입금확인" );
        break;
      }
      case "chglist" : {
        this.typeName = " 취소/교환/환불 신청";
        this.filterBy = false;
        this.mainList = this.mainList.filter(element => element.state === "교환신청" );
        break;
      }
      case "estlist" : {
        this.typeName = " 견적요청";
        this.filterBy = false;
        this.mainList = this.mainList.filter(element => element.state === "견적요청" );
        break;
      }
      case "reqlist" : {
        this.typeName = " 문의요청";
        this.filterBy = false;
        this.mainList = this.mainList.filter(element => element.state === "문의요청" );
        break;
      }
    }
  }
}
