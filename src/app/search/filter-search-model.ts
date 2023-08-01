import {Search} from "./search-model";

export interface FilterSearch extends Search{
  filter:number | null;
  field_name: string | null;
}
