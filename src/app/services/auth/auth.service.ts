import { Injectable } from '@angular/core';
import {Person} from "../../interfaces/person";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../users/user.service";
import {environment} from "../../../environments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly myAppUrl: string;
  private readonly myApiUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/header';
  }


  getToken():string | null {
    return localStorage.getItem('token');
  }
  getHeaders(): { [header: string]: string } {
    const token = this.getToken();
    return {
      'Authorization': `Bearer ${token}`
    };
  }

  getUserHeader(){
    const headers = this.getHeaders();
    const user = this.http.get<Person>(
      `${this.myAppUrl}${this.myApiUrl}`,
      { headers }
    );
    console.log("usuario:",user);
    return user;
  }

}
