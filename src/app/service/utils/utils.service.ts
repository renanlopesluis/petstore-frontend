import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  URLBASE: string = "http://localhost:3010/petstore/";
  private headers: HttpHeaders;
 
  constructor() { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json'})
  }

  getUrlBase(){
    return this.URLBASE;
  }

  getHeaders(){
    return this.headers;
  }
}
