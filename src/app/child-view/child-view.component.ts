import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../services/financial-data.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  public financialDataFinTable: any = null;

  constructor(
    private financialDataService: FinancialDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialDataService.getFinTable().subscribe(data => this.financialDataFinTable = data);
  }
}
