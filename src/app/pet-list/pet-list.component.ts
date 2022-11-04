import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pet/pet.service';
import { BasicServiceService } from '../service/basic-service/basic-service.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


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
  serviceOptions: Array<any> = [];
  basicServices: Array<any>;
  selectedServiceOption: number;
  query = new Subject<string>();

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

  search($event){
    let q = $event.target.value;
    this.query.next(q);
    this.executeQuery();
  } 

  remove(id : number){
    this.petService.remove(id).subscribe((response: petResponse)=>{
        if(response)
          this.pets = this.pets.filter(p => p.id !== id);
    });
  }

  private list(){
    this.petService.list().subscribe(data => {this.pets = data;})
  }

  private executeQuery(){
    this.query.pipe(debounceTime(200)).subscribe(
      searchValue => this.petService
      .search(searchValue).subscribe(data => {this.pets = data;})
    );
  }

  private loadServiceOptions(){
    if(this.serviceOptions.length == 0)
      this.serviceOptions =  this.basicService.getServiceOptions();
  }

}
