import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UtilsService } from 'src/app/service/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  private petsUrl = 'pets';
  private bathUrl = 'bath';
  private hairCareUrl = 'hair';
  private serviceOptions = [];
  private hairCareTypes = [];
  private bathTypes = [];

  constructor(private http: HttpClient, private utils : UtilsService) {
    this.loadServiceOptions();
    this.loadBathTypes();
    this.loadHairCareTypes();
  }

  getServiceOptions(){
    return this.serviceOptions;
  }

  getServices(codeService : number) : Array<any>{
    switch(codeService){
      case 1: return this.bathTypes;
      case 2: return this.hairCareTypes;
      default: return [];
    }
  }

  executeService(basiceServiceCode : number, petId: any, serviceCode: any){
    if(basiceServiceCode === 1){
      return this.doBath(petId, serviceCode);
    }else if(basiceServiceCode === 2){
      return this.doHairCare(petId,serviceCode);
    }
  }

  private doBath(petId: any, serviceCode: any){
    return this.http.put(`${this.utils.getUrlBase()}${this.petsUrl}/${this.bathUrl}`,{petId: petId, serviceCode: serviceCode });
  }

  private doHairCare(petId: any, serviceCode: any){
    return this.http.put(`${this.utils.getUrlBase()}${this.petsUrl}/${this.hairCareUrl}`,{petId: petId, serviceCode: serviceCode });
  }

  private loadServiceOptions(){
    this.serviceOptions = [
      {
        code: 1,
        description: 'Bath'
      },
      {
        code: 2,
        description: 'Hair Care'
      }
    ]
  }

  private loadHairCareTypes(){
    this.hairCareTypes = [
      {
        code: 1,
        description: 'Short hair'
      },
      {
        code: 2,
        description: 'Long hair'
      }
    ]
  }

  private loadBathTypes(){
    this.bathTypes = [
      {
        code: 1,
        description: 'Dry bath'
      },
      {
        code: 2,
        description: 'Water bath'
      },
      {
        code: 3,
        description: 'Perfumeful bath'
      },
      {
        code: 4,
        description: 'Perfumeless bath'
      }
    ]
  }
}
