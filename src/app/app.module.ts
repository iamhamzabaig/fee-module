import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeeElementComponent } from './fee-element/fee-element.component';
import { MonthlyTransactionComponent } from './monthly-transaction/monthly-transaction.component';
import { AnnualFundComponent } from './annual-fund/annual-fund.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FeeElementComponent,
    MonthlyTransactionComponent,
    AnnualFundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
