import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(public _miHttp: HttpClient) {
  }

  public urlServidor = 'http://localhost:8080/api';

  GET(path: string): Observable<any> {
    return this._miHttp.get(this.urlServidor + path);
  }

  POST(path: string, postData: any): Observable<any> {
    return this._miHttp.post(this.urlServidor + path, postData);
  }

  PUT(path: string, postData: any): Observable<any> {
    return this._miHttp.put(this.urlServidor + path, postData);
  }

  DELETE(path: string, postData: any): Observable<any> {
    return this._miHttp.request('delete', this.urlServidor + path, { body: postData });
  }

  UPLOAD(path: string, postData: any): Observable<any> {
    const req = new HttpRequest('POST', this.urlServidor + path, postData, {
      reportProgress: false,
      responseType: 'json'
    });
    return this._miHttp.request(req);
  }



}
