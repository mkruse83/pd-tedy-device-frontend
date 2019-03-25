import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TedyapiService {

  constructor(private httpClient: HttpClient) { }

  getState() {
    return this.httpClient.get('http://localhost:3000/state');
  }

  init(thingName: String) {
    return this.httpClient.get('http://localhost:3000/init/' + thingName);
  }
}
