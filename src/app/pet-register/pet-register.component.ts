import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PetService } from '../service/pet.service';
import { PetTypeService } from '../service/pettype.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.component.html',
  styleUrls: ['./pet-register.component.css']
})
export class PetRegisterComponent implements OnInit {
  
  pet: any;
  types: Array<any>;

  constructor(private petService: PetService,  private petTypeService : PetTypeService) { }

  ngOnInit() {
    this.pet = {};
    this.initTypes();
  }

  create(frm: FormGroup){
    this.petService.create(this.pet).subscribe(response=>{
      if(response)
        frm.reset();
    }); 
  }

  private initTypes(){
    this.petTypeService.list().subscribe(data => this.types = data);
  }

}
