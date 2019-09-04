import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from 'src/app/service/utils.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private petUrl = "pet";

  constructor(private http: HttpClient, private utils : UtilsService) { }

  list(){
    return this.http.get<Array<any>>(this.utils.getUrlBase().concat(this.petUrl));
  }
  
  create(pet: any) {
    return this.http.post(this.utils.getUrlBase().concat(this.petUrl), pet);
  }
}
