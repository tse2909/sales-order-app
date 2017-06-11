import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CustomerService } from '../../general/providers/customer.service';
@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  customerList:any;
  public orderCreateForm: FormGroup;
  constructor(private fb:FormBuilder, private customerservice: CustomerService) { }

  ngOnInit() {
    this.buildForm();
    this.getAllCustomers();
  }

  buildForm(){
    this.orderCreateForm = this.fb.group({
      customer: [''],
      description: ['']
    })
  }

  getAllCustomers() {
    this.customerservice.getAllCustomers('all')
      .subscribe(
        (res) => {
          this.customerList = res;
        },
        (err) => {

        }
      );
  }

  getCustomer($event){

  }

}
