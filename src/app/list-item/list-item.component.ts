import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input, OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {

  @Input() items;

  ngOnInit() {
    const items = JSON.parse(localStorage.getItem('items'));
  }

  onDelete(item) {
    const index = this.items.indexOf(item);

    this.items.splice(index, 1);
    const items = this.items;
    localStorage.setItem('items', JSON.stringify(items));
  }
}
