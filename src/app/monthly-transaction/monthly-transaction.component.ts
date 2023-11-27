import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-transaction',
  templateUrl: './monthly-transaction.component.html',
  styleUrls: ['./monthly-transaction.component.scss']
})
export class MonthlyTransactionComponent implements OnInit {
  userName: string= "Hamza Munawar";
  
  constructor() { }

  ngOnInit(): void {
  }

}
