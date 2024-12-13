import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './pages/auth/auth.component';
import { BannerComponent } from './pages/banner/banner.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { PaymentStatusComponent } from './pages/payment-status/payment-status.component';
import { ServiceComponent } from './pages/service/service.component';
import { SpecialistComponent } from './pages/specialist/specialist.component';
import { SlotComponent } from './pages/slot/slot.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { TransactionStatusComponent } from './pages/transaction-status/transaction-status.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, BannerComponent, CustomerComponent, PaymentMethodComponent, PaymentStatusComponent, ServiceComponent, SpecialistComponent, SlotComponent, TransactionComponent, TransactionStatusComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
