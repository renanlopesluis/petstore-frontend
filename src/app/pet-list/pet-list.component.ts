import { Component, OnInit } from '@angular/core';
import { PetService } from './service/pet.service';
import { PetTypeService } from './service/pettype.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Array<any>;
  pet: any;
  types : Array<any>;
  constructor(private petService: PetService, private petTypeService : PetTypeService) { }

  ngOnInit() {
    this.initTypes();
    this.pet = {};
    this.list();
  }

  list(){
    this.petService.list().subscribe(data => this.pets = data);
  }

  create(frm: FormGroup){
    this.petService.create(this.pet).subscribe(response => {
      this.pets.push(response);
      frm.reset();
    });
  }

  initTypes(){
    this.petTypeService.list().subscribe(data => this.types = data);
  }
  
}
