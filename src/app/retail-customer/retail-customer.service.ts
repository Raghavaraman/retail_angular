import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailCustomerService {

  constructor(private httpClient: HttpClient) { }
  URLRET = '/assets/store_customer.json';
  URLRETC = '/assets/store_customer.json';

  retails(): Observable<any> {
    return this.httpClient.get<any>(this.URLRET);
  }

  retailc(): Observable<any> {
    return this.httpClient.get<any>(this.URLRETC);
  }
}
