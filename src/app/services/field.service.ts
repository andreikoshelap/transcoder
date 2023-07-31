import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FieldModel} from "../model/field.model";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private readonly ALL_FIELDS: string;
  private readonly ALL_CONDITIONS: string;

  constructor(private http: HttpClient) {
    this.ALL_FIELDS = 'api/filter/fields/all';
    this.ALL_CONDITIONS = 'api/filter/condition/all';
  }

  getTableFields(): Observable<FieldModel[]> {
    return this.http.get<FieldModel[]>(this.ALL_FIELDS);
  }

  getConditions(): Observable<string[]> {
    return this.http.get<string[]>(this.ALL_CONDITIONS);
  }
}
