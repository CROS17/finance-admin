import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/enviroment";
import {Observable} from "rxjs";
import {Expense} from "../../interfaces/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/persons';
  }

  saveExpense(expense: Expense): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, expense);
  }

  getExpenseById(id: number): Observable<Expense>{
    return this.http.get<Expense>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
