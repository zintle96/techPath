import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //Node express api

  api : string = 'https://techexpress-server.herokuapp.com/users';
  
  url : string = 'http://localhost:4100/users';
  


  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Get single user

  GetUser(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/` + id);
  }


  // Get all admin users

  GetUsers() {
    return this.httpClient.get(`${this.url}`);
  }
  

  



}
