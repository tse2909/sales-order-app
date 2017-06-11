import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RepService } from '../../general/providers/rep.service';

@Component({
  selector: 'app-rep-create',
  templateUrl: './rep-create.component.html',
  styleUrls: ['./rep-create.component.css']
})
export class RepCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private repService: RepService) { }
  showSuccess: boolean = false;
  showError: boolean = false;
  public repCreateForm: FormGroup;

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.repCreateForm = this.fb.group({
      name:[''],
      description:['']
    });
  }

  submitRepCreateForm() {
    this.showSuccess = false;
    this.showError = false;

    let data = {
      name: this.repCreateForm.value.name,
      description: this.repCreateForm.value.description,
    };


    this.repService.createNewRep(data)
      .subscribe(
      (res) => {
        if (res.status) {
          this.showSuccess = true;
          this.repCreateForm.reset();
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
