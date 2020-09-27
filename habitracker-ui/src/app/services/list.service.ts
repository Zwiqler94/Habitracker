import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IList } from '@src/app/models/IList';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class ListService {


  public getLists() {
    return this.http.get('http://localhost:3000/habit-lists');
  }
  constructor(private http: HttpClient) { }
}
