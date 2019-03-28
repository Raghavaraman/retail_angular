import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailInventoryService {

  constructor(private httpClient: HttpClient) { }
  URLINVENTRET = '/assets/store_inventory.json';
  URLINVENT = '/assets/store_inventory.json';

  retailinventory(): Observable<any> {
    return this.httpClient.get<any>(this.URLINVENTRET);
  }

  retailinv(): Observable<any> {
    return this.httpClient.get<any>(this.URLINVENT);
  }
}
