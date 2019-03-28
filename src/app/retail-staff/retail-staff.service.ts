import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailStaffService {

  constructor(private httpClient: HttpClient) { }
  URLSTAFFRET = '/assets/store_staff.json';
  URLSTAFF = '/assets/store_staff.json';

  retailstaffs(): Observable<any> {
    return this.httpClient.get<any>(this.URLSTAFFRET);
  }

  retailsta(): Observable<any> {
    return this.httpClient.get<any>(this.URLSTAFF);
  }
}
