// import { Subject } from 'rxjs/Subject';
import { RequestOptions, Headers, URLSearchParams, Http } from '@angular/http';
import { Injectable, isDevMode, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {
  }

  createHeaders() {
    const headers = new Headers();
    if (!(isDevMode())) {
      headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
      headers.append('Pragma', 'no-cache');
      headers.append('Expires', '0');
    }
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With');
    return headers;
  }
  createRequestOptions() {
    return new RequestOptions({ headers: this.createHeaders() });
  }

}
