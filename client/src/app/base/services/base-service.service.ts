import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseURL = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}
  Get<T>(url: string): Observable<any> {
    return this.http.get(`${baseURL}/${url}`);
  }
  Post<T>(url: string, data: any): Observable<any> {
    return this.http.post(`${baseURL}/${url}`, data);
  }
  Put<T>(url: string, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${url}`, data);
  }
  Delete<T>(url: string): Observable<any> {
    return this.http.delete(`${baseURL}/${url}`);
  }
}
