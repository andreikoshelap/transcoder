import { Injectable } from '@angular/core';
import {SharedService} from "./shared.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilterSearch} from "../search/filter-search-model";
import {FilterList} from "../list/filter-list-model";

@Injectable({
  providedIn: 'root'
})
export class TranscoderService {

  private readonly SERVER_URL: string
  private readonly SEARCH:string

  constructor(private shared:SharedService,
              private http:HttpClient) {
    this.SERVER_URL = this.shared.getServerURL();
    this.SEARCH = 'api/filter/all';
  }

  getFilters(filterSearch:FilterSearch): Observable<FilterList>{
    return  this.http.post<FilterList>(this.SEARCH, filterSearch);

  }

  search(filterSearch: FilterSearch): Observable<FilterList> {
    return this.http.post<FilterList>(this.SEARCH, filterSearch);
  }
}
