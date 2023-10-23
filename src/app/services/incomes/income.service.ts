import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/enviroment";
import {Observable} from "rxjs";
import {Income} from "../../interfaces/income";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/incomes';
  }

  saveIncome(income: Income): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, income);
  }

  getIncomeById(id: number): Observable<Income>{
    return this.http.get<Income>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
