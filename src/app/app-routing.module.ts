import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListingsComponent } from './components/listings/listings.component';

const routes: Routes = [
  { path: "", component: ListingsComponent },
  { path: "view-list/:id", component: ListingComponent },  
  { path: 'edit-list/:id', component: EditListingComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
