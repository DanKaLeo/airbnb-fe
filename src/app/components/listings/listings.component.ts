import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/entities/listing';
import { ListingService } from 'src/app/services/listing.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  _flag: boolean;

  constructor(public servListings: ListingService, public servUsuario: UserService) {
    this.servListings.loadListings();
    this._flag = false;
    this.servUsuario.logueado.subscribe(
      (_log: boolean) => {
        console.log(_log);
        this._flag = _log;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

  onSelect(list: Listing) {
    console.log(list);

  }
}
