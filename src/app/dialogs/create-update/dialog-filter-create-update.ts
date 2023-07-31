import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FilterModel} from "../../model/filter.model";
import {FieldListModel} from "../../list/field-list-model";
import {TranscoderService} from "../../services/transcoder.service";
import {FieldService} from "../../services/field.service";
import {FieldModel} from "../../model/field.model";
import {FormControl} from "@angular/forms";

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


  filterForSave: FilterModel = {
    position: 0, id: 0, fieldName: '', conditionOperator: '', propertyValue: ''
  }

  constructor(public dialogRef: MatDialogRef<DialogFilterCreateUpdate>,
              @Inject(MAT_DIALOG_DATA) public data: FilterModel,
              @Inject(MAT_DIALOG_DATA) public list: FieldListModel,
              private filterService: TranscoderService,
              private fieldService: FieldService,
              // private readonly flagService: FlagService
  ) {
    if (data) {
      this.filterForSave = data;
      // this.selectedAdditionalInfo = data.additionalInfo;
      // if (data && data.businessFunctions) {
      //   this.businessFunctionsForm.setValue({currentValue: '', selectedValues: new Set(String(data.businessFunctions).split(','))});
      // }
      // if (data && data.networkTypes) {
      //   this.networkTypesForm.setValue({currentValue: '', selectedValues: new Set(String(data.networkTypes).split(','))});
      // }
      // if (data && data.documentTypes) {
      //   this.printedOnDocumentsForm.setValue({currentValue: '', selectedValues: new Set(String(data.documentTypes).split(','))});
      // }
    }
    // if(list) {
    //   this.networkTypeList = string[](list.code);
    // }
  }

  // filteredProposalsNetworkType(): string[] {
  //   return this.networkTypeList;
  // }
  //
  // filteredSelectionForAutoCompleteNetworkType(): string[] {
  //   return this.selectedNetworkTypes;
  // }
  //
  // networkTypeClear() {
  //   if (this.networkTypesForm.value.selectedValues) {
  //     this.networkTypesForm.value.selectedValues.clear();
  //   }
  // }
  //
  // filteredProposalsDocuments(): string[] {
  //   return this.printedOnDocumentsList;
  // }
  //
  // filteredSelectionForAutoCompleteDocuments(): string[] {
  //   return this.selectedDocumentTypes;
  // }
  //
  // printedDocumentsClear() {
  //   if (this.printedOnDocumentsForm.value.selectedValues) {
  //     this.printedOnDocumentsForm.value.selectedValues.clear();
  //   }
  // }
  //
  // filteredProposalsBusinessFunctions(): string[] {
  //   return this.businessFunctionsList;
  // }
  //
  // filteredSelectionForAutoCompleteBusinessFunctions(): string[] {
  //   return this.selectedBusinessFunctions;
  // }
  //
  // businessFunctionsClear() {
  //   if (this.businessFunctionsForm.value.selectedValues) {
  //     this.businessFunctionsForm.value.selectedValues.clear();
  //   }
  // }

  createUpdateFilter(): void {
    this.isLoadingResults = true;
    this.filterForSave.fieldName = this.selectedField;
    this.filterForSave.conditionOperator = this.selectedCondition;

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
