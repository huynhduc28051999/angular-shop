import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detal',
  templateUrl: './order-detal.component.html',
  styleUrls: ['./order-detal.component.css']
})
export class OrderDetalComponent implements OnInit {
  orderDetal = {};
  id;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.orderService.getOrderById(this.id).take(1).subscribe(o => this.orderDetal = o);
  }

  ngOnInit() {
  }

}
