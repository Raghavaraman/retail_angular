import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailService {
  constructor(private httpClient: HttpClient) { }
  URL = '/assets/store_alert.json';

  retailalerts(): Observable<any> {
    return this.httpClient.get<any>(this.URL);
  }
}
