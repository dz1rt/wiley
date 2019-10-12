import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ItemsService} from '../items.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemsService],
  animations: [
    trigger( 'done', [
      state('no', style({
        opacity: 0.4,
        backgroundColor: 'grey',
        pointerEvents: 'none',
      })),
      state('yes', style('*')),
      transition('yes => no', [
        animate(200)
      ]),
    ])
  ],
})
export class ItemComponent{

  @Input() item;
  @Output() delete = new EventEmitter();
  edit = false;
  status = true;

  onDelete() {
    this.delete.emit(this.item);
  }

  onToggle() {
    this.edit = !this.edit;
  }

  saveValue(newTitle) {
    const title = this.item.title;
    const localStorageItem = JSON.parse(localStorage.getItem('items'));

    // tslint:disable-next-line:forin
    for (const key in localStorageItem) {

      if (localStorageItem[key].title === title) {
        localStorageItem[key].title = newTitle;
        localStorageItem.sort(ItemsService.sortItemsByTitle);

        localStorage.setItem('items', JSON.stringify(localStorageItem));
      }
    }
    this.item.title = newTitle;
    this.onToggle();
  }
  changeStatusTask() {
    this.status = !this.status;
  }

}
