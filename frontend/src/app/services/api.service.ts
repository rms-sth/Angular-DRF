import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl: string = 'http://localhost:8000'
  productUrl: string = '/api/v1/products/'

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseUrl + this.productUrl, { headers: this.httpHeaders });
  }
}
