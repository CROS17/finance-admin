import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../../interfaces/person";
import {environment} from "../../../environments/enviroment";
import {UserService} from "../users/user.service";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly myAppUrl: string;
  private readonly myApiUrl: string;

  constructor(
    private http: HttpClient,
    private _userService: UserService,
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/persons';
  }

  savePerson(person: Person): Observable<void> {
    const token = localStorage.getItem('token');
    console.log("token", token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<void>(
      `${this.myAppUrl}${this.myApiUrl}`,
      person,
      { headers }
    );
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(
      `${this.myAppUrl}${this.myApiUrl}${id}`
    );
  }

}
