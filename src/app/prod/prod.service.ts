import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
// import { Product } from './product';
// import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  constructor(private httpClient: HttpClient) { }
  URL = '/assets/product.json';
  URLSU = '/assets/product-suggestions.json';

  product(): Observable<any> {
    return this.httpClient.get<any>(this.URL);
  }

  productSu(): Observable<any> {
    return this.httpClient.get<any>(this.URLSU);
  }
}
