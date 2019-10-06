import { Component } from '@angular/core';
import {ItemsService} from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ItemsService {
  items = JSON.parse(localStorage.getItem('items'));

  onCreate(inputsValue) {

    const newItem = {
      title: inputsValue.value,
    };

    this.items.push(newItem);
    this.items.sort(this.sortItemsByTitle);

    const jsonObj = JSON.stringify(this.items);
    localStorage.setItem('items', jsonObj);
  }
}
