// Module Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Imports
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { InnerSearchComponent } from './inner-search/inner-search.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { LandingSearchComponent } from './landing-page/landing-search/landing-search.component';
import { LandingQuickLinksComponent } from './landing-page/landing-quick-links/landing-quick-links.component';
import { LandingListingsComponent } from './landing-page/landing-listings/landing-listings.component';
// import { InnerSearchSearchComponent } from './inner-search/inner-search-search/inner-search-search.component';
// import { InnerSearchMapComponent } from './inner-search/inner-search-map/inner-search-map.component';
// import { InnerSearchListingsComponent } from './inner-search/inner-search-listings/inner-search-listings.component';
import { GuestDashComponent } from './user-dash/guest-dash/guest-dash.component';
import { HostDashComponent } from './user-dash/host-dash/host-dash.component';
import { ConversationsComponent } from './user-dash/conversations/conversations.component';
import { GuestDashInnerNavComponent } from './user-dash/guest-dash/guest-dash-inner-nav/guest-dash-inner-nav.component';
import { GuestDashEditProfileComponent } from './user-dash/guest-dash/guest-dash-edit-profile/guest-dash-edit-profile.component';
import { HostDashEditProfileComponent } from './user-dash/host-dash/host-dash-edit-profile/host-dash-edit-profile.component';
import { HostDashInnerNavComponent } from './user-dash/host-dash/host-dash-inner-nav/host-dash-inner-nav.component';
import { ConversationFilterComponent } from './user-dash/conversations/conversation-filter/conversation-filter.component';
import { ConversationInboxComponent } from './user-dash/conversations/conversation-inbox/conversation-inbox.component';
import { ProfileInfoRightComponent } from './public-profile/profile-info-right/profile-info-right.component';
import { ProfileInfoMainComponent } from './public-profile/profile-info-main/profile-info-main.component';
import { ListingComponent } from './listing/listing.component';
import { ListingPhotoComponent } from './listing/listing-photo/listing-photo.component';
import { ListingInstantBookComponent } from './listing/listing-instant-book/listing-instant-book.component';
import { ListingInfoNavComponent } from './listing/listing-info-nav/listing-info-nav.component';
import { ListingInfoComponent } from './listing/listing-info/listing-info.component';
import { ListingCreateComponent } from './listing/listing-create/listing-create.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AppComponent },
  // { path: 'test', component: InnerSearchComponent, children: [
    // { path: 'map', component: InnerSearchMapComponent },
    // { path: 'listing', component: InnerSearchListingsComponent } 
  // ]},
  { path: '', pathMatch: 'full', component: LandingPageComponent  },
  { path: 'login', component: LogRegComponent },
  // { path: 'search', component: InnerSearchMapComponent },
  { path: 'homes', component: LandingPageComponent },
  { path: 'listings', component: ListingComponent },
  { path: 'listings/:id', component: ListingInfoComponent },
  { path: 'account', component: UserDashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
