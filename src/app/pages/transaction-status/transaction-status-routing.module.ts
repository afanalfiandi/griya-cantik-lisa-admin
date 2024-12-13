import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionStatusComponent } from './transaction-status.component';

const routes: Routes = [{ path: '', component: TransactionStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionStatusRoutingModule {}
