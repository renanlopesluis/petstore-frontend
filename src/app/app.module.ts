import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';

import { UtilsService } from './service/utils/utils.service';
import { PetService } from './service/pet/pet.service';
import { PetTypeService } from './service/pet-type/pettype.service';
import { BasicServiceService } from './service/basic-service/basic-service.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PetRegisterComponent } from './pet-register/pet-register.component';


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [UtilsService, PetService, PetTypeService, BasicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
