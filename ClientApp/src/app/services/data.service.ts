import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'api/dados';

  constructor(private http: HttpClient) {}

  obterDados(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
