import { Injectable } from '@angular/core';

export class Order {
  public orderId    : string;
  public orderCnt   : number;
  public orderTitle : string;
  public userNm     : string;
  public state      : string;
  public createDt   : string;
}
@Injectable()
export class OrderService {
  constructor() {}
  getRecentOrder() : any {
    return recentOrderList;
  }
}
var recentOrderList = [{
  "orderId"    : "201700000001",
  "orderCnt"   : 5,
  "orderTitle" : "에어오픈랜치",
  "userNm"     : "채영재",
  "state"      : "배송준비",
  "createDt"   : "2009-04-12T20:44:55"
},{
  "orderId"    : "201700000002",
  "orderCnt"   : 10,
  "orderTitle" : "니퍼",
  "userNm"     : "채영재",
  "state"      : "입금확인",
  "createDt"   : "2009-04-12T20:44:55"
}];
