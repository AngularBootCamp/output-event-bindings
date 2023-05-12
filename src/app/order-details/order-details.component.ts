import { Component, Input } from '@angular/core';

import { Order } from '..https://api.angularbootcamp.com-types';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('selectedOrderDetails') sod: Order | undefined;
}
