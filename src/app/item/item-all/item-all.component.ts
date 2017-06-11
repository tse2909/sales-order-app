import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../general/providers/item.service';

@Component({
  selector: 'app-item-all',
  templateUrl: './item-all.component.html',
  styleUrls: ['./item-all.component.css']
})
export class ItemAllComponent implements OnInit {
  items: any;
  constructor(private itemservice: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.itemservice.getAllItems().subscribe((res) => this.items = res, (err) => { console.log("Error in getAllItems") })
  }
}
