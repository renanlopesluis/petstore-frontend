import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  baseUrl = "http://localhost:8080/petstore/";
  petUrl = "pet";
  petTypeUrl = "petType";

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Array<any>>(this.baseUrl.concat(this.petUrl));
  }

  listTypes(){
    return this.http.get<Array<any>>(this.baseUrl.concat(this.petTypeUrl));
  }


  create(pet: any){
    return this.http.post(this.baseUrl.concat(this.petUrl), pet);
  }
}
