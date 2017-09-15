import { Component, OnInit } from '@angular/core';

import {Customer} from '../model/generated';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => this.customers = customers);
  }

}
