import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilterSearch} from "../search/filter-search-model";
import {FilterList} from "../list/filter-list-model";
import {CriteriaModel} from "../model/criteriaModel";
import {SharedService} from "./shared.service";

@Injectable({
  providedIn: 'root'
})
export class TranscoderService {

  private readonly SERVER_URL: string;
  private readonly SEARCH:string;
  private readonly REMOVE: string;
  private readonly SAVE: string;

  constructor(private shared: SharedService,
              private http:HttpClient) {
    this.SERVER_URL = this.shared.getServerURL();
    this.SEARCH = this.SERVER_URL + '/filter/search';
    this.REMOVE = this.SERVER_URL + '/filter/{id}';
    this.SAVE = 'api/filter/save';
  }

  search(filterSearch: FilterSearch): Observable<FilterList> {
    return this.http.post<FilterList>(this.SEARCH, filterSearch);
  }

  remove(id: any): Observable<Object> {
    const regExp = /{id}/gi;
    const url = this.REMOVE.replace(regExp, id.toString());
    return this.http.delete<Observable<Object>>(url);
  }

  save(filter: CriteriaModel): Observable<CriteriaModel> {
    return this.http.post<CriteriaModel>(this.SAVE, filter);
  }
}
