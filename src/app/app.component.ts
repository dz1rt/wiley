import { Component } from '@angular/core';
import {ItemsService} from './items.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemsService],
})
export class AppComponent {
  items = JSON.parse(localStorage.getItem('items'));

  constructor(private itemService: ItemsService ){
    console.log(itemService);
  }
  onCreate(inputsValue) {

    const newItem = {
      title: inputsValue.value,
    };

    this.items.push(newItem);
    this.items.sort(ItemsService.sortItemsByTitle);

    const jsonObj = JSON.stringify(this.items);
    localStorage.setItem('items', jsonObj);
  }
}
