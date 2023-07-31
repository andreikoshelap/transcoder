import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilterSearch} from "../search/filter-search-model";
import {FilterList} from "../list/filter-list-model";
import {FilterModel} from "../model/filter.model";

@Injectable({
  providedIn: 'root'
})
export class TranscoderService {

  private readonly SEARCH:string;
  private readonly REMOVE: string;
  private readonly SAVE: string;

  constructor(private http:HttpClient) {
    this.SEARCH = 'api/filter/search';
    this.REMOVE = 'api/filter/{id}';
    this.SAVE =  'api/filter/';
  }

  search(filterSearch: FilterSearch): Observable<FilterList> {
    return this.http.post<FilterList>(this.SEARCH, filterSearch);
  }

  remove(id: any): Observable<Object> {
    const regExp = /{id}/gi;
    const url = this.REMOVE.replace(regExp, id.toString());
    return this.http.delete<Observable<Object>>(url);
  }

  save(filter: FilterModel): Observable<FilterModel> {
    return this.http.post<FilterModel>(this.SAVE, filter);
  }
}
