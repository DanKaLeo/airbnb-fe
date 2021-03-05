import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { Listing } from "../entities/listing";
import { ResponseApi } from "../entities/response-api";
import { ResponseCheckout } from '../entities/response-checkout';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public listings: Listing[] = [];
  public prefijo: string = "/list";

  constructor(public _http: EndpointService) {
    this.loadListings();
  }

  add(listing: Listing) {
    return this._http.POST(this.prefijo, listing).toPromise<{ estado: string, informe?: string }>();
  }

  list() {
    return this._http.GET(this.prefijo).toPromise<Listing[] | ResponseApi>();
  }

  listOne(id: string) {
    return this._http.GET(this.prefijo + '/' + id);
  }

  update(listing: Listing) {
    return this._http.PUT(this.prefijo + '/' + listing.id, listing).toPromise<{ estado: string, informe?: string }>();
  }

  delete(id: string) {
    return this._http.DELETE(this.prefijo, id).toPromise<{ estado: string, informe?: string }>();
  }

  checkout(id: string, checkIn: string, checkOut: string) {
    return this._http.POST(this.prefijo + '/checkout', {
      id: id,
      checkIn: checkIn,
      checkOut: checkOut
    }).toPromise<ResponseApi | ResponseCheckout>();
  }

  loadListings() {
    this.list().then(
      (_listings: Listing[] | ResponseApi) => {
        if (!Array.isArray(_listings)) {
          console.log("ERROR!", _listings.mensaje);
        } else {
          this.listings = _listings;
        }
      }
    ).catch(
      (err) => {
        console.log(err)
      }
    );
  }
}
