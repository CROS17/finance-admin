import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/enviroment";
import {Observable} from "rxjs";
import {Income} from "../../interfaces/income";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/incomes';
  }

  saveIncome(income: Income): Observable<void>{
    const headers = new HttpHeaders(this.authService.getHeaders());
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, income);
  }

  getIncomeById(id: number): Observable<Income>{
    const headers = new HttpHeaders(this.authService.getHeaders());
    return this.http.get<Income>(
      `${this.myAppUrl}${this.myApiUrl}${id}`,
      {headers}
    );
  }
}
