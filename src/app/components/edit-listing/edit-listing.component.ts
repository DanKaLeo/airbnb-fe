import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/entities/listing';
import { ListingService } from 'src/app/services/listing.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {

  list!: Listing;
  listingForm!: FormGroup;

  constructor(private route: ActivatedRoute, private servListings: ListingService, public datepipe: DatePipe, public FB: FormBuilder, public servUser: UserService) { }

  //SpecialPrices?: SpecialPrices[];

  ngOnInit(): void {
    this.getListing();
  }

  getListing(): void {
    let id: string = this.route.snapshot.paramMap.get('id') + "";
    this.servListings.listOne(id)
      .subscribe(list => {
        this.list = list
        this.listingForm = this.FB.group({
          'id': new FormControl(this.list.id),
          'ownerId': new FormControl(this.list.ownerId),
          'name': new FormControl(this.list.name),
          'slug': new FormControl(this.list.slug),
          'description': new FormControl(this.list.description),
          'adults': new FormControl(this.list.adults),
          'children': new FormControl(this.list.children),
          'isPetsAllowed': new FormControl(this.list.isPetsAllowed),
          'basePrice': new FormControl(this.list.basePrice),
          'cleaningFee': new FormControl(this.list.cleaningFee),
          'imageUrl': new FormControl(this.list.imageUrl),
          'weeklyDiscount': new FormControl(this.list.weeklyDiscount),
          'monthlyDiscount': new FormControl(this.list.monthlyDiscount)
        });
      });
  }

  save(): void {
    console.log('-------------------------------Antes')
    console.log(this.listingForm);
    console.log(this.list);
    console.log('-------------------------------Despues')
    this.list = this.listingForm.value;
    console.log(this.list);
    this.servListings.update(this.list);
  }

}
