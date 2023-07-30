import {Search} from "./search-model";

export interface FilterSearch extends Search{
  name: string | null;
}
