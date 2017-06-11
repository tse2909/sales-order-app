import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ItemService } from '../../general/providers/item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})

export class ItemCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private itemService: ItemService) { }
  showSuccess: boolean = false;
  showError: boolean = false;
  public itemCreateForm: FormGroup;
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.itemCreateForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  submitItemCreateForm() {
    this.showSuccess = false;
    this.showError = false;

    let data = {
      name: this.itemCreateForm.value.name,
      description: this.itemCreateForm.value.description,
    };


    this.itemService.createNewItem(data)
      .subscribe(
      (res) => {
        if (res.status) {
          this.showSuccess = true;
          this.itemCreateForm.reset();
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
