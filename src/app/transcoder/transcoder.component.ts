import {Component, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {CriteriaModel} from "../model/criteria.model";
import {FilterSearch} from "../search/filter-search-model";
import {TranscoderService} from "../services/transcoder.service";
import {FieldService} from "../services/field.service";
import {FieldModel} from "../model/field.model";
import {DialogFilterCreateUpdate} from "../dialogs/create-update/dialog-filter-create-update";
import {ComponentType} from "@angular/cdk/overlay";
import {MatDialog} from "@angular/material/dialog";
import {DialogFilterRemove} from "../dialogs/remove/dialog-filter-remove";
import {FilterModel} from "../model/filter.model";


@Component({
  selector: 'app-transcoder',
  templateUrl: './transcoder.component.html',
  styleUrls: ['./transcoder.component.scss'],
})

export class TranscoderComponent implements OnInit {

  fields: FieldModel[];
  conditions: string[];
  filterSearch: FilterSearch;
  selectedFilter: FilterModel;

  displayedColumns: string[] = ['select', 'field_name', 'condition_operator', 'property_value'];

  dataSource = new MatTableDataSource<CriteriaModel>();
  selection = new SelectionModel<CriteriaModel>(false, []);

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
  checkboxLabel(row?: CriteriaModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  searchModel: FilterSearch = {filter : 1, field_name: null, page: 1, pageSize: 5};

  constructor(private transcoderService: TranscoderService,
              private fieldService: FieldService,
              public dialog: MatDialog) {
    this.transcoderService.search(this.searchModel).subscribe(data => {
      this.dataSource.data = data.filterList;
    });
    this.selectedFilter = {
      id: 1,
      filterName: ''
    };
  }


  ngOnInit(): void {
    // this.fieldService.getTableFields()
    //   .subscribe( data => {
    //     console.log(data);
    //   this.fields = data;
    // });
    //
    // this.fieldService.getConditions()
    //   .subscribe( data => {
    //     console.log(data);
    //   this.conditions = data;
    // });
    // this.loadFilters();
  }

  openDialog<T>(component: ComponentType<T>, dialogWidth: string | undefined, dialogData: CriteriaModel | undefined, afterCloseActions: Function): void {
    const dialogRef = this.dialog.open(component, {
      width: dialogWidth,
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        afterCloseActions();
      }
    });
  }

  onAddButtonClicked() {
    this.openDialog(DialogFilterCreateUpdate, '920px', undefined, () => this.loadFilters());
  }

  loadFilters() {
    this.transcoderService.search(this.searchModel).subscribe(data => {
      console.log(data);
      this.dataSource.data = data.filterList;
    });
  }


  onDeleteButtonClicked(selected: CriteriaModel[]) {
    this.openDialog(DialogFilterRemove, '920px', selected[0], () => this.loadFilters());
  }

  onUpdateButtonClicked(selected: CriteriaModel[]) {
    const dialogRef = this.dialog.open(DialogFilterCreateUpdate, {
      data: selected[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = [];
        this.loadFilters();
      }
    });

  }
}
