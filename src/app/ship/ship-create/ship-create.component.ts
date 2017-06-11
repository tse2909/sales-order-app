import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ShipMethodService } from '../../general/providers/shipMethod.service';
@Component({
  selector: 'app-ship-create',
  templateUrl: './ship-create.component.html',
  styleUrls: ['./ship-create.component.css']
})
export class ShipCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private shipmethodservice: ShipMethodService) { }
  showSuccess: boolean = false;
  showError: boolean = false;
  public shipCreateForm: FormGroup;
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.shipCreateForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  submitShipCreateForm() {
    this.showSuccess = false;
    this.showError = false;

    let data = {
      name: this.shipCreateForm.value.name,
      description: this.shipCreateForm.value.description,
    };


    this.shipmethodservice.createNewShipMethods(data)
      .subscribe(
      (res) => {
        if (res.status) {
          this.showSuccess = true;
          this.shipCreateForm.reset();
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
