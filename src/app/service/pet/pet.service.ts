import { Injectable } from '@angular/core';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import { UtilsService } from 'src/app/service/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private petsUrl = "pets";
  private petUrl = "pet";
  

  constructor(private http: HttpClient, private utils : UtilsService) { }

  list(){
    return this.http.get<Array<any>>(this.utils.getUrlBase().concat(this.petsUrl));
  }
  
  search(name) {
    if(name == undefined || name == null || name == ""){
      return this.list();
    }else{
      let params = new HttpParams().set('name', name);
      return this.http.get<Array<any>>(this.utils.getUrlBase().concat(this.petUrl), {params});
    }
  }

  create(pet: any) {
    return this.http.post(this.utils.getUrlBase().concat(this.petUrl), pet);
  }

  remove(id: any) : any{
    let httpParams = new HttpParams().set('id', id);
    let options = { params: httpParams };

    return this.http.delete(this.utils.getUrlBase().concat(this.petUrl),  options);
  }
}
