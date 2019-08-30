import { Component, OnInit } from '@angular/core';
import { PetService } from './service/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets : Array<any>;
  constructor(private petService : PetService) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.petService.list().subscribe(data => this.pets = data);
  }
}
