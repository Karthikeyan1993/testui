import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterValueChangeEvent } from '../shared/model';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.css'],
})
export class DataFilterComponent implements OnInit {
  @Output() filterValueChanged = new EventEmitter<FilterValueChangeEvent>();
  ngOnInit(): void {}

  onChanges = (prop, event) => {
    const value = event.target.value;
    this.filterValueChanged.emit({
      prop,
      value,
    });
  }
}
