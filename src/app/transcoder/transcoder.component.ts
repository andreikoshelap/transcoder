import {Component, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {FilterModel} from "../model/filter.model";
import {FilterSearch} from "../search/filter-search-model";
import {TranscoderService} from "../services/transcoder.service";


@Component({
  selector: 'app-transcoder',
  templateUrl: './transcoder.component.html',
  styleUrls: ['./transcoder.component.scss'],
})

export class TranscoderComponent implements OnInit{

  displayedColumns: string[] = ['select', 'position', 'field_name', 'condition_operator', 'property_value'];

  dataSource = new MatTableDataSource<FilterModel>();
  selection = new SelectionModel<FilterModel>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: FilterModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  searchModel: FilterSearch = {field_name: null, page: 1, pageSize: 5};


  constructor(private transcoderService:TranscoderService) {
    this.transcoderService.search(this.searchModel).subscribe(data => {
      this.dataSource.data = data.filterList;
    });
  }


  ngOnInit(): void {
  }


}
