import { Component, OnInit } from '@angular/core';
import { Column, Game, FilterValueChangeEvent, PaginationPageChangeEvent } from '../shared/model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataColumnDefs: Column[] = [];
  data: Game[] = [];
  page = 1;
  itemPerPage = 10;
  limitOptions: number[] = [10, 20, 50, 100];
  searchTerm = '';
  prop = '';
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.init();
  }

  private init = (): void => {
    this.getData();
    this.initColumnDef();
  }

  private initColumnDef = (): void => {
    this.dataColumnDefs = [
      { displayName: 'Title', prop: 'title', width: 20 },
      { displayName: 'Platform', prop: 'platform', width: 10 },
      { displayName: 'Score', prop: 'score', width: 10 },
      { displayName: 'Genre', prop: 'genre', width: 10 },
      { displayName: 'Editors Choice', prop: 'editors_choice', width: 10 },
      { displayName: 'Release Year', prop: 'release_year', width: 10 },
    ];
  }

  private getData = (): void => {
    this.service.getData().subscribe((response) => {
      this.data = response;
    });
  }

  onPageChange = (data: PaginationPageChangeEvent) => {
    this.page = data.page;
    this.itemPerPage = data.itemPerPage;
  }

  onNumPages = (data) => {};

  onSelectChange = (param) => {
    this.page = 1;
  }

  onFilterValueChanged = (param: FilterValueChangeEvent) => {
    this.prop = param.prop;
    this.searchTerm = param.value;
  }
}
