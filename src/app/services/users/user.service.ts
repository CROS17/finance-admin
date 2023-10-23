import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/enviroment";
import {User} from "../../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: string;
  private myApiUrl: string;
  private myLoginUrl: string;
  private myLogoutUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users';
    this.myLoginUrl = 'api/users/login';
    this.myLogoutUrl = 'api/users/logout';
  }

  saveUser(user: User): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }

  login(user: User): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myLoginUrl}`, user);
  }

  logout(): Observable<void> {
    // Obtén el token de autenticación almacenado en localStorage u otro lugar.
    const token = localStorage.getItem('token'); // Asegúrate de ajustar esto según cómo almacenes el token.

    // Crea un encabezado con el token de autenticación.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Realiza la solicitud HTTP incluyendo el encabezado Authorization.
    return this.http.post<void>(
      `${this.myAppUrl}${this.myLogoutUrl}`,
      null, // No necesitas enviar ningún cuerpo en la solicitud POST.
      { headers }
    );
  }
}
