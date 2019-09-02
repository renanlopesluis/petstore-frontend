import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {
  
  baseUrl = "http://localhost:8080/petstore/";
  petTypeUrl = "petType";

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Array<any>>(this.baseUrl.concat(this.petTypeUrl));
  }
}
