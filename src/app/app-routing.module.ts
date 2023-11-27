import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnualFundComponent } from './annual-fund/annual-fund.component';
import { FeeElementComponent } from './fee-element/fee-element.component';
import { MonthlyTransactionComponent } from './monthly-transaction/monthly-transaction.component';

const routes: Routes = [
  {path:'',component:AnnualFundComponent},
  {path: 'anualFund', component: AnnualFundComponent},
  {path: 'feeElement', component: FeeElementComponent},
  {path: 'monthlyTransaction', component:MonthlyTransactionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
