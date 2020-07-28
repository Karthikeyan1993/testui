import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-paginator',
  templateUrl: './data-paginator.component.html',
  styleUrls: ['./data-paginator.component.css'],
})
export class DataPaginatorComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  protected _itemPerPage: number;
  // tslint:disable-next-line: variable-name
  protected _totalItems: number;
  // tslint:disable-next-line: variable-name
  protected _totalPages: number;
  // tslint:disable-next-line: variable-name
  protected _page = 1;

  protected inited = false;

  @Output() pageChanged = new EventEmitter<{}>();
  @Output() numPages: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  get itemPerPage(): number {
    return this._itemPerPage;
  }

  set itemPerPage(val: number) {
    this._itemPerPage = val;
    this._totalPages = this.calcTotalPages();
  }

  @Input()
  get totalItems(): number {
    return this._totalItems;
  }
  set totalItems(val: number) {
    this._totalItems = val;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(v: number) {
    this._totalPages = v;
    this.numPages.emit(v);
    if (this.inited) {
      this.selectPage(this.page);
    }
  }

  set page(value: number) {
    // tslint:disable-next-line: variable-name
    const _previous = this._page;
    this._page = value > this.totalPages ? this.totalPages : value || 1;
    if (_previous === this._page || typeof _previous === 'undefined') {
      return;
    }
    this.pageChanged.emit({
      page: this._page,
      itemPerPage: this.itemPerPage,
    });
  }

  get page(): number {
    return this._page;
  }

  constructor() {}

  ngOnInit(): void {
    this._itemPerPage =
      typeof this._itemPerPage !== 'undefined' ? this._itemPerPage : 10;
    this.totalPages = this.calcTotalPages();
    this._page = 1;
    this.inited = true;
    this.pageChanged.emit({
      page: this._page,
      itemPerPage: this.itemPerPage,
    });
  }

  writeValue(value: number): void {
    this.page = value;
  }

  noPrevious(): boolean {
    return this.page === 1;
  }

  noNext(): boolean {
    return this.page === this._totalPages;
  }

  selectPage(page: number, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (event && event.target) {
      const target: any = event.target;
      target.blur();
    }
    this.writeValue(page);
  }

  private calcTotalPages = () => {
    const totalPages =
      this.itemPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemPerPage);

    return Math.max(totalPages || 0, 1);
  }
}
