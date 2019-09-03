import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';

import { UtilsService } from './utils.service';
import { PetService } from './pet-list/service/pet.service';
import { PetTypeService } from './pet-list/service/pettype.service';
import { BasicServiceService } from './pet-list/service/basic-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UtilsService, PetService, PetTypeService, BasicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
