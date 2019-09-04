import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pet.service';
import { BasicServiceService } from '../service/basic-service.service';


interface petResponse {
  message: string;
}

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Array<any>;
  serviceOptions: Array<any>;
  basicServices: Array<any>;
  selectedServiceOption: number;

  constructor(private petService: PetService, private basicService : BasicServiceService) { }

  ngOnInit() {
    this.list();
    this.loadServiceOptions();
    this.basicServices = [];
  }

  selectServiceOption(value: any){
    this.selectedServiceOption = value;
    this.basicServices = this.basicService.getServices(value);
  }

  executeService(basiceServiceCode : number, petId: any, serviceCode: any){
    this.basicService.executeService(basiceServiceCode, petId,serviceCode).subscribe((response: petResponse)=>{
      if(response)
        alert(response.message);
    });
  }

  showList(){
    return this.pets != undefined && this.pets.length > 0;
  }

  search(name:string){
    this.petService.search(name).subscribe(data => {
      this.pets = data;
    });
  }

  private list(){
    this.petService.list().subscribe(data => {
      this.pets = data;
    });
  }

  private loadServiceOptions(){
    this.serviceOptions =  this.basicService.getServiceOptions();
  }

}
