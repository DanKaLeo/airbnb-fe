import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/entities/listing';
import { ListingService } from 'src/app/services/listing.service';
import { DatePipe } from '@angular/common';
import { ResponseCheckout } from 'src/app/entities/response-checkout';
import { ResponseApi } from 'src/app/entities/response-api';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  list!: Listing;
  DateCheck: FormGroup;
  today: Date = new Date();
  respuestaG: ResponseCheckout | undefined;
  respuestaB!: ResponseApi;

  constructor(private route: ActivatedRoute, private servListings: ListingService, public datepipe: DatePipe) {

    this.DateCheck = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });

  }

  ngOnInit(): void {
    this.getListing();
  }

  getListing(): void {
    let id: string = this.route.snapshot.paramMap.get('id') + "";
    this.servListings.listOne(id)
      .subscribe(list => this.list = list);
  }

  checkout(): void {
    let start = this.datepipe.transform(this.DateCheck.controls['start'].value, 'yyyy-MM-dd');
    let end = this.datepipe.transform(this.DateCheck.controls['end'].value, 'yyyy-MM-dd');
    if (start == null || end == null) {
      return;
    } else {
      this.servListings.checkout(this.list.id, start, end).then(
        (_resp: ResponseApi | ResponseCheckout) => {
          if(_resp.estado){
            this.respuestaG = _resp as ResponseCheckout;
          }else{
            this.respuestaB= _resp;
          }
        }
      ).catch(
        (err) => {
          console.log(err)
        }
      );

      console.log();
    }
  }
}
