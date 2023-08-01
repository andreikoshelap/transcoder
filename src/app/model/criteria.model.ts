import {FilterModel} from "./filter.model";

export interface CriteriaModel {
  id: number;
  fieldName: string;
  conditionOperator: string
  propertyValue: string
  filter: FilterModel
}
