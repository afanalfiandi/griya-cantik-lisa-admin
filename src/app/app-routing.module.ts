import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'banner',
    loadChildren: () =>
      import('./pages/banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./pages/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'payment-method',
    loadChildren: () =>
      import('./pages/payment-method/payment-method.module').then(
        (m) => m.PaymentMethodModule
      ),
  },
  {
    path: 'payment-status',
    loadChildren: () =>
      import('./pages/payment-status/payment-status.module').then(
        (m) => m.PaymentStatusModule
      ),
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./pages/service/service.module').then((m) => m.ServiceModule),
  },
  {
    path: 'slot',
    loadChildren: () =>
      import('./pages/slot/slot.module').then((m) => m.SlotModule),
  },
  {
    path: 'specialist',
    loadChildren: () =>
      import('./pages/specialist/specialist.module').then(
        (m) => m.SpecialiistModule
      ),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./pages/transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  {
    path: 'transaction-status',
    loadChildren: () =>
      import('./pages/transaction-status/transaction-status.module').then(
        (m) => m.TransactionStatusModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
