import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../general/providers/customer.service';
import { RepService } from '../../general/providers/rep.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-customer-all',
  templateUrl: './customer-all.component.html',
  styleUrls: ['./customer-all.component.css']
})
export class CustomerAllComponent implements OnInit {
  customers = [];
  totalCustomerCount: number = 0;
  public paginator = 1;
  constructor(private customerService: CustomerService, private repservice: RepService) { }

  ngOnInit() {
    this.getAllCustomer(this.paginator);
  }

  getAllCustomer(paginator: number) {
    this.customerService.getAllCustomers(paginator)
      .subscribe((res) => {
        let data = [];
        data = res;
        _.each(data, (item) => {
          if (item.rep_id) {
            this.repservice.getRepById(item.rep_id)
              .subscribe(
              (res) => {
                item.repData = res;
              },
              (err) => {
              }
              )
          }
          this.customers.push(item);
        });

      },
      (err) => { console.log("Error In getAllCustomer") }
      )
  }
}
