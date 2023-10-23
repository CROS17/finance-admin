import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../../interfaces/person";
import {environment} from "../../../environments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/persons';
  }

  savePerson(person: Person): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, person);
  }

  getPersonById(id: number): Observable<Person>{
    return this.http.get<Person>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

}
