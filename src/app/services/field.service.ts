import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FieldModel} from "../model/field.model";

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private readonly ALL_FIELDS: string;

  constructor( private http: HttpClient) {
    this.ALL_FIELDS = 'api/filter/fields/all';
  }

  getTableFields(): Observable<FieldModel[]> {
    return this.http.get<FieldModel[]>(this.ALL_FIELDS);
  }
}
