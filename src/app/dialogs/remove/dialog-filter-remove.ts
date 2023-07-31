import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FilterModel} from "../../model/filter.model";
import {TranscoderService} from "../../services/transcoder.service";

@Component({
  selector: 'dialog-filter-remove',
  templateUrl: 'dialog-filter-remove.html',
  styleUrls: ['./dialog-filter-remove.scss']
})
export class DialogFilterRemove {

  isLoadingResults = false;

  constructor(public dialogRef: MatDialogRef<DialogFilterRemove>,
              @Inject(MAT_DIALOG_DATA) public data: FilterModel,
              private transcoderService: TranscoderService,
              // private readonly flagService: FlagService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeFilter(): void {
    this.isLoadingResults = true;
    this.transcoderService.remove(this.data.position).subscribe(data => {
      this.isLoadingResults = false;
    });
  }

}