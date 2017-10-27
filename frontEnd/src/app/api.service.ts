import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

// =====================================================================================
// USERS
// =====================================================================================

  registerUser(user) {
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }

  loginUser(user) {
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }

  getCurrentUser() {
    return this._http.get('/currentUser').map(data => data.json()).toPromise();
  }

  logout() {
    return this._http.get('/logout').map(data => data.json()).toPromise();
  }


// =====================================================================================
// LISTINGS
// =====================================================================================

  addListing(listing) {
    return this._http.post('/api/createListing', listing).map(data => data.json()).toPromise();
  }

  deleteListing(listing) {
    return this._http.post('/listing/destroy', listing).map(data => data.json()).toPromise();
  }

  getAllListings() {
    return this._http.get('/listings').map(data => data.json()).toPromise();
  }

  getAllUserListings() {
    return this._http.get('/myListings').map(data => data.json()).toPromise();
  }

}