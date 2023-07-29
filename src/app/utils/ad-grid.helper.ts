import {
  GidcActionButtonsRendererComponent,
  GidcCheckboxRendererComponent,
  GidcHeaderRendererComponent,
  GidcMenuHeaderRendererComponent,
  GidcNoRowsOverlayComponent
} from "@gidc/pali/ag-grid";

import {MenuModule} from "@ag-grid-enterprise/menu";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {ColumnsToolPanelModule} from "@ag-grid-enterprise/column-tool-panel";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {Module} from "@ag-grid-community/core";

export const agGridTheme = 'ag-theme-material';

export const agGridModules: Module[] = [MenuModule, ClientSideRowModelModule, ColumnsToolPanelModule, SetFilterModule];

export const frameworkComponents = {
  booleanRenderer: GidcCheckboxRendererComponent,
  actionButtonsRenderer: GidcActionButtonsRendererComponent,
  iconHeaderRenderer: GidcMenuHeaderRendererComponent,
  sortAndPinHeaderRenderer: GidcHeaderRendererComponent,
  noRowsOverlay: GidcNoRowsOverlayComponent,
};

export const autoGroupColumnDef = {
  minWidth: 200,
  cellRendererParams: {
    suppressCount: true,
  },
  checkboxSelection: true,
  sortable: true,
  comparator: (valueA: string, valueB: string): number => {
    if (valueA === 'diverse' || valueB === 'diverse') {
      return 0;
    }
    return valueA === valueB ? 0 : valueA > valueB ? 1 : -1;
  },
};
