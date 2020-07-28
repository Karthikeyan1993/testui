import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataFilterPipe } from './data-filter.pipe';
import { DataSortPipe } from './data-sort.pipe';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { DataPaginatorComponent } from './data-paginator/data-paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataGridComponent,
    NavBarComponent,
    PageNotFoundComponent,
    DataFilterPipe,
    DataSortPipe,
    DataFilterComponent,
    DataPaginatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule , HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
