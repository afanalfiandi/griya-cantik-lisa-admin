import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';
import { PaymentStatusRoutingModule } from './payment-status-routing.module';

@NgModule({
  declarations: [PaymentMethodComponent],
  imports: [CommonModule, PaymentStatusRoutingModule],
})
export class PaymentStatusModule {}
