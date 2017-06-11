import { Component, OnInit } from '@angular/core';
import { RepService } from '../../general/providers/rep.service';

@Component({
  selector: 'app-rep-all',
  templateUrl: './rep-all.component.html',
  styleUrls: ['./rep-all.component.css']
})
export class RepAllComponent implements OnInit {
  reps: any;
  constructor(private repservice: RepService) { }

  ngOnInit() {
    this.getAllReps();
  }

  getAllReps(){
    this.repservice.getAllReps().subscribe((res) => this.reps = res, (err) => { console.log("Error in getAllItems") })
  }

}
