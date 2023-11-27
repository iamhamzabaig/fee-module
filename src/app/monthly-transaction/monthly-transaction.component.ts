import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-transaction',
  templateUrl: './monthly-transaction.component.html',
  styleUrls: ['./monthly-transaction.component.scss']
})
export class MonthlyTransactionComponent implements OnInit {
  amount: string = 'Amount';

  element: string = "Element";
  
  constructor() { }

  ngOnInit(): void {
  }

}
