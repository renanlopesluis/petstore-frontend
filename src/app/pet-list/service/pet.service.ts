import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  baseUrl = "http://localhost:8080/pet/";
  petsUrl = "listPets";

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<any[]>(`${this.baseUrl.concat(this.petsUrl)}`);
  }
}
