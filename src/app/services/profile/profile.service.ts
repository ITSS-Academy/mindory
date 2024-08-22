import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  createProfile(idToken: string) {
    return this.http.post(
      `${environment.apiUrl}/profile`,
      {},
      {
        headers: new HttpHeaders({
          Authorization: `${idToken}`,
        }),
      },
    );
  }

  getProfile(idToken: string) {
    return this.http.get(`${environment.apiUrl}/profile`, {
      headers: new HttpHeaders({
        Authorization: `${idToken}`,
      }),
    });
  }
}
