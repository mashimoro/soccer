import { Injectable, isDevMode } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthService } from '../service/auth.service';

@Injectable()
export class ApiClientService {
  constructor(private http: Http, private authService: AuthService) { }

  private get requestHeader() {
    const options = this.authService.createRequestOptions();
    return options;
  }

  private get requestHeaderPut() {
    const options = this.authService.createRequestOptions();
    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Access-Control-Allow-Origin', '*');
    return options;
  }

  private get requestHeaderWithoutContentType() {
    const options = this.authService.createRequestOptions();
    options.headers.append('Access-Control-Allow-Origin', '*');
    return options;
  }

  public getWithPath(path: string) {
    return this.http.get(`${path}`);
  }

  public postWithPath(path: string, body) {
    return this.http.post(`${path}`, body);
  }

  public getWithPathGoogle(path: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/${path}`, this.requestHeader);
  }

  public getWithPathYoutube(path: string) {
    return this.http.get(`${path}`, this.requestHeader);
  }

  public putWithPath(path: string, body) {
    return this.http.put(`${path}`, body, this.requestHeaderPut);
  }

  public putWithoutContentType(path: string, body) {
    return this.http.put(`${path}`, body, this.requestHeaderWithoutContentType);
  }
}

