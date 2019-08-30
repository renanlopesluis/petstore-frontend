import { Component, OnInit } from '@angular/core';
import { PetService } from './service/pet.service';
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
  constructor(private petService: PetService) { }

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
    this.types = [];
    let dog = {id: 1, description:'Dog'}
    let cat = {id: 2, description:'Cat'}
    this.types.push(dog);
    this.types.push(cat);
  }
}
