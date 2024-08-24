import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) {
  }

  getSubject(idToken: string, id: string) {
    return this.http.get(`${environment.apiUrl}/subjects/${id}`, {
      headers: new HttpHeaders({
        Authorization: `${idToken}`,
      }),
    });
  }
}
