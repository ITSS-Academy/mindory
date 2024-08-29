import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FlashcardDTO, FlashcardModel } from '../../models/flashcard.model';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  constructor(private http: HttpClient) {}

  getFlashcardById(idToken: string, id: string) {
    return this.http.get(`${environment.apiUrl}/flashcard?id=${id}`, {
      headers: new HttpHeaders({
        Authorization: `${idToken}`,
      }),
    });
  }

  getStudyFlashcardById(idToken: string, id: string) {
    return this.http.get(`${environment.apiUrl}/flashcard?id=${id}`, {
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

  createFlashcard(idToken: string, flashcard: FlashcardDTO) {
    return this.http.post(`${environment.apiUrl}/flashcard`, flashcard, {
      headers: new HttpHeaders({
        Authorization: `${idToken}`,
      }),
    });
  }
}
