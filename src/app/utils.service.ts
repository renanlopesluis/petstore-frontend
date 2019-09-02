import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  URLBASE: string = "http://localhost:8080/petstore/";
 
  constructor() { }

  getUrlBase(){
    return this.URLBASE;
  }
}
