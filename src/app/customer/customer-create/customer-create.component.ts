import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CustomerService } from '../../general/providers/customer.service';
import { RepService } from '../../general/providers/rep.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})

export class CustomerCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private customerservice: CustomerService, private repservice: RepService) { }

  showSuccess: boolean = false;
  showError: boolean = false;
  public customerCreateForm: FormGroup;
  repList:any;

  ngOnInit() {
    this.buildForm();
    this.getAllRep();
  }

  buildForm() {
    this.customerCreateForm = this.fb.group({
      name: [''],
      rep_id: [''],
      email: [''],
      phone1: ['+880'],
      phone2: ['+880'],
      location: [''],
      postal: ['1900'],
    });
  }
  
  getAllRep(){
    this.repservice.getAllReps().subscribe((res)=> this.repList = res);
  }

  getRep($event){
    console.log($event);
  }

  submitCustomerCreateForm() {
    this.showSuccess = false;
    this.showError = false;

    let data = {
      name: this.customerCreateForm.value.name,
      rep_id: this.customerCreateForm.value.rep_id,
      phone1: this.customerCreateForm.value.phone1,
      phone2: this.customerCreateForm.value.phone2,
      location: this.customerCreateForm.value.location,
      postal: this.customerCreateForm.value.postal,
    };


    this.customerservice.createNewCustomer(data)
      .subscribe(
        (res) => {
          if (res.status) {
            this.showSuccess = true;
            this.customerCreateForm.reset();
          } else {
            this.showError = true;
          }
        },
        (err) => {
          this.showError = true;
          console.log("Error in createNewCustomer");
        }
      )
  }

}
