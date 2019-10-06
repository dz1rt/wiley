import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {

  @Input() newValue;
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();

  save() {
    this.saved.emit(this.newValue);
  }

  cancel() {
    this.canceled.emit();
  }
}
