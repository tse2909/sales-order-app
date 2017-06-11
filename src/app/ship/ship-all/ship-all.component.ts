import { Component, OnInit } from '@angular/core';
import { ShipMethodService } from '../../general/providers/shipMethod.service';
@Component({
  selector: 'app-ship-all',
  templateUrl: './ship-all.component.html',
  styleUrls: ['./ship-all.component.css']
})
export class ShipAllComponent implements OnInit {
  ships: any;
  constructor(private shipmethodservice: ShipMethodService) { }

  ngOnInit() {
  this.getAllShip();
  }

  getAllShip() {
    this.shipmethodservice.getAllShipMethods().subscribe((res) => this.ships = res, (err) => { console.log("Error in getAllItems") })
  }
}
