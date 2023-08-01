import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CriteriaModel} from "../../model/criteriaModel";
import {FieldListModel} from "../../list/field-list-model";
import {TranscoderService} from "../../services/transcoder.service";
import {FieldService} from "../../services/field.service";
import {FieldModel} from "../../model/field.model";

@Component({
  selector: 'dialog-filter-create-update',
  templateUrl: 'dialog-filter-create-update.html',
  styleUrls: ['./dialog-filter-create-update.scss']
})
export class DialogFilterCreateUpdate  implements OnInit{

  isLoadingResults = false;
  conditions: string[];
  fieldNames: FieldModel[];

  selectedCondition: string;
  selectedField: string;
  selectedValue: string;
  selectedFilter: number = 1;


  filterForSave: CriteriaModel = {
     id: 0, fieldName: '', conditionOperator: '', propertyValue: '', filter: 1
  }

  constructor(public dialogRef: MatDialogRef<DialogFilterCreateUpdate>,
              @Inject(MAT_DIALOG_DATA) public data: CriteriaModel,
              @Inject(MAT_DIALOG_DATA) public list: FieldListModel,
              private filterService: TranscoderService,
              private fieldService: FieldService,
  ) {
    if (data) {
      this.filterForSave = data;
      this.selectedValue = data.propertyValue;
      this.selectedFilter = data.filter;
      console.log(data);

      if (data && data.fieldName) {
        this.selectedField = data.fieldName;
      }
      if (data && data.conditionOperator) {
        this.selectedCondition = data.conditionOperator;
      }
    }
  }

  createUpdateFilter(): void {
    this.isLoadingResults = true;
    this.filterForSave.fieldName = this.selectedField;
    this.filterForSave.conditionOperator = this.selectedCondition;
    this.filterForSave.filter = this.selectedFilter;

    this.filterService.save(this.filterForSave).subscribe(data => {
      console.log(data);
      this.isLoadingResults = false;
    });
  }

  ngOnInit(): void {
    this.fieldService.getTableFields()
      .subscribe( data => {
        console.log(data);
        this.fieldNames = data;
      });

    this.fieldService.getConditions()
      .subscribe( data => {
        console.log(data);
        this.conditions = data;
      });
  }
}
