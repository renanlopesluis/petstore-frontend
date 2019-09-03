import { Component, OnInit } from '@angular/core';
import { PetService } from './service/pet.service';
import { PetTypeService } from './service/pettype.service';
import { BasicServiceService } from './service/basic-service.service';
import { FormGroup } from '@angular/forms';

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
  pet: any;
  types: Array<any>;
  serviceOptions: Array<any>;
  basicServices: Array<any>;
  selectedServiceOption: number;

  constructor(private petService: PetService, private petTypeService : PetTypeService, 
    private basicService : BasicServiceService) { }

  ngOnInit() {
    this.initTypes();
    this.pet = {};
    this.list();
    this.loadServiceOptions();
  }

  create(frm: FormGroup){
    this.petService.create(this.pet).subscribe(response => {
      this.pets.push(response);
      frm.reset();
    });
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

  private list(){
    this.petService.list().subscribe(data => {
      if(data != null && data != undefined && data.length > 0)
        this.pets = data
      else
        this.pets = [];
    });
  }

  private initTypes(){
    this.petTypeService.list().subscribe(data => this.types = data);
  }

  private loadServiceOptions(){
    this.serviceOptions =  this.basicService.getServiceOptions();
  }

}
