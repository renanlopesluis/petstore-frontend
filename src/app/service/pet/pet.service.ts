import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { UtilsService } from 'src/app/service/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private URL = 'pets';


  constructor(private http: HttpClient, private utils : UtilsService) { }

  list(){
    return this.http.get<Array<any>>(this.utils.getUrlBase().concat(this.URL));
  }

  search(name) {
    if(!name){
      return this.list();
    }else{
      let params = new HttpParams().set('name', name);
      return this.http.get<Array<any>>(this.utils.getUrlBase().concat(this.URL), {params});
    }
  }

  create(pet: any) {
    return this.http.post(this.utils.getUrlBase().concat(this.URL), pet);
  }

  remove(id: any) : any{
    return this.http.delete(this.utils.getUrlBase().concat(this.URL).concat(`/${id}`));
  }
}
