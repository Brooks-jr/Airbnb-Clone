import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { ApiService } from '../../api.service';
import { Listing } from '../../listing';

@Component({
  selector: 'app-listing-create',
  templateUrl: './listing-create.component.html',
  styleUrls: ['./listing-create.component.css']
})
export class ListingCreateComponent implements OnInit {

 
  newListing: Listing = new Listing(); 
  myListings: Array<Listing>;

  constructor(private _api: ApiService) { }
 

  ngOnInit() {
    
  }


  addListing() {
    this._api.addListing(this.newListing)
    .then(() => { this.getListings(); })
    .catch((err) => { console.log(err); });
  }

  getListings() {
    this._api.getAllUserListings()
    .then((listings) => { this.myListings = listings; })
    .catch((err) => { console.log(err); });
  }

  deleteListing(idx) {
    this._api.deleteListing(this.myListings[idx])
    .then(() => { this.getListings(); })
    .catch((err) => { console.log(err); });
  }

  linkPhoto() {
    this.newListing.image = prompt("Please enter the url for your photo:");
   
  }

}
