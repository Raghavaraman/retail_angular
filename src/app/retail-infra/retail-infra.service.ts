import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailInfraService {

  constructor(private httpClient: HttpClient) { }
  URLINFRARET = '/assets/store_infra.json';
  URLINFRA = '/assets/store_infra.json';

  retailinfras(): Observable<any> {
    return this.httpClient.get<any>(this.URLINFRARET);
  }

  retailinf(): Observable<any> {
    return this.httpClient.get<any>(this.URLINFRA);
  }
}
