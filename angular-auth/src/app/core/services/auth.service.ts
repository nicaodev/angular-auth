import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:3000';

  public sign(payLoad: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.url}/sign`, payLoad).pipe(
      map((res) => {
        return console.log(res);
      }),
      catchError((e) => {
        if (e.error.message) return throwError(() => e.error.message);

        return throwError(() => "Servidor OFF!");
      })
    )
  }

}
