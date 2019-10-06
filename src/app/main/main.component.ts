import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  title = "";
  @Output() add = new EventEmitter();

  ngOnInit() {
    const add = JSON.parse(localStorage.getItem('items'));
  }

  onAdd(inputFiled) {
    this.add.emit(inputFiled);
    inputFiled.value = '';
  }

}
