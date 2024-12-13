import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentMethodComponent } from './payment-method.component';
import { PaymentMethodRoutingModule } from './payment-method-routing.module';

@NgModule({
  declarations: [PaymentMethodComponent],
  imports: [CommonModule, PaymentMethodRoutingModule],
})
export class PaymentMethodModule {}
