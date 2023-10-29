import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/enviroment";
import {User} from "../../interfaces/user";
import {Observable, tap} from "rxjs";

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
    /*return this.http.post<void>(`${this.myAppUrl}${this.myLoginUrl}`, user);*/
    /*realizo mi login y guardo mi token*/
    return this.http.post<any>(`${this.myAppUrl}${this.myLoginUrl}`, user).pipe(
      tap((res: any) => {
        // Almacena el token en localStorage si se recibe en la respuesta.
        console.log("login",res.data);
        if (res && res.data.token) {
          localStorage.setItem('token', res.data.token);
        }
      })
    );
  }

  logout(): Observable<void> {
    // Obténgo el token de autenticación almacenado en localStorage u otro lugar.
    const token = localStorage.getItem('token');

    // Crea un encabezado con el token de autenticación.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Realiza la solicitud HTTP incluyendo el encabezado Authorization.
    return this.http.post<void>(
      `${this.myAppUrl}${this.myLogoutUrl}`,
      null, // No necesito enviar ningún cuerpo en POST.
      { headers }
    );
  }


  getTokenLocalStorage() {
    console.log("getTokenLocalStorage",localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  // guardaremos y obtendremos si hay usuario logeado, una mala practica
  /*getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }*/

}
