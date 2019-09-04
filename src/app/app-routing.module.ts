import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetRegisterComponent } from './pet-register/pet-register.component';


const routes: Routes = [
  { path: '', component: PetRegisterComponent, pathMatch: 'prefix' },
  { path: 'pets', component: PetListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
