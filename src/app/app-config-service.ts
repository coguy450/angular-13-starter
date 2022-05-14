import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  private serverUrl = 'http://localhost:4000';
  get(getUrl: string) {
    return this.httpClient.get(`${this.serverUrl}/${getUrl}`);
  }
  post(getUrl: string, payload: any) {
    return this.httpClient.post(`${this.serverUrl}/${getUrl}`, payload);
  }
}

