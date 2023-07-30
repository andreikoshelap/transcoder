import {Search} from "./search-model";

export interface FilterSearch extends Search{
  field_name: string | null;
}
