import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/auth-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private _user!: User;

  get user() {
    return {...this._user};
  }

  constructor(
    private http: HttpClient,
  ) { }

  register(name: string, email: string, password: string) {
    const url = `${this.baseUrl}/auth/new`;
    const body = { name, email, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap(response => {
        if (response.ok) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          localStorage.setItem('token', response.token!);
        }
      }),
      map(valid => valid.ok),
      catchError(error => of(error.error.msg)),
    );
  }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap(({ ok, token }) => {
        if (ok) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          localStorage.setItem('token', token!);
        }
      }),
      map(valid => valid.ok),
      catchError(error => of(error.error.msg)),
    );
  }

  validateToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map(response => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        localStorage.setItem('token', response.token!);
        this._user = {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          name: response.name!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          email: response.email!,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          uid: response.uid!,
        };
        return response.ok;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    localStorage.clear();
  }
}
