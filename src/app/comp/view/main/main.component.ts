import { Component, OnInit } from '@angular/core';
import {Order, OrderService} from "../../../service/order.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers : [OrderService]
})
export class MainComponent implements OnInit {
  mainList : Array<Order>[];
  constructor(private orderService : OrderService) {
    this.mainList = orderService.getRecentOrder();
  }
  ngOnInit() {
  }

}
