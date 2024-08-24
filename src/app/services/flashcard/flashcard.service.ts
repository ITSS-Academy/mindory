import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  constructor(private http: HttpClient) {}

  getFlashcardById(idToken: string, id: string) {
    return this.http.get(`${environment.apiUrl}/flashcard/${id}`, {
      headers: new HttpHeaders({
        Authorization: `${idToken}`,
      }),
    });
  }

  getFlashcardBySubjectId(idToken: string, id: string) {
    return this.http.get(`${environment.apiUrl}/flashcard/subject?id=${id}`, {
      headers: new HttpHeaders({
        Authorization: `${idToken}`,
      }),
    });
  }
}
