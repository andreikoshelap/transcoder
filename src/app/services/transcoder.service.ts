import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilterSearch} from "../search/filter-search-model";
import {FilterList} from "../list/filter-list-model";

@Injectable({
  providedIn: 'root'
})
export class TranscoderService {

  private readonly SEARCH:string

  constructor(private http:HttpClient) {
    this.SEARCH = 'api/filter/search';
  }

  search(filterSearch: FilterSearch): Observable<FilterList> {
    return this.http.post<FilterList>(this.SEARCH, filterSearch);
  }
}
