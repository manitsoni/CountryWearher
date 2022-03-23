import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { DisplayCountryDataComponent } from './country/display-country-data/display-country-data.component';

const routes: Routes = [
  {path:'addCountry',component:AddCountryComponent},
  {path:'displayCountry',component:DisplayCountryDataComponent},
  {path:"**",redirectTo:'addCountry',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
