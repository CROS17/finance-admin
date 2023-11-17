import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../../interfaces/person";
import {environment} from "../../../environments/enviroment";
import {UserService} from "../users/user.service";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly myAppUrl: string;
  private readonly myApiUrl: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private _userService: UserService,
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/persons';
  }

  savePerson(person: Person): Observable<void> {

    const headers = new HttpHeaders(this.authService.getHeaders());

    return this.http.post<void>(
      `${this.myAppUrl}${this.myApiUrl}`,
      person,
      { headers }
    );
  }

  getPersonById(id: number): Observable<Person> {
    const headers = new HttpHeaders(this.authService.getHeaders());

    return this.http.get<Person>(
      `${this.myAppUrl}${this.myApiUrl}`,
      { headers }
    );
  }

}
