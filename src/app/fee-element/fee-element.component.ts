import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-element',
  templateUrl: './fee-element.component.html',
  styleUrls: ['./fee-element.component.scss']
})
export class FeeElementComponent implements OnInit {

  userName: string = "";
  fatherName= "";

  constructor() { }

  ngOnInit(): void {
  }

}
