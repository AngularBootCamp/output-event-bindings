import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Order } from '..https://api.angularbootcamp.com-types';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  @Input() orders: Order[] = [];

  @Output() selectOrder = new EventEmitter<Order>();

  // -------- external API above, internal implementation below

  pickOrder(order: Order) {
    this.selectOrder.emit(order);
  }
}
