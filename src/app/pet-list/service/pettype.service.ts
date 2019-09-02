import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from 'src/app/utils.service';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {
  
  private petTypeUrl = "petType";

  constructor(private http: HttpClient, private utils : UtilsService) { }

  list(){
    return this.http.get<Array<any>>(this.utils.getUrlBase().concat(this.petTypeUrl));
  }
}
