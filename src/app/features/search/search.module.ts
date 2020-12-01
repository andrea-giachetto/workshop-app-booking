import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// custom components
import { SearchComponent } from './search.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { ServicesComponent } from './components/services/services.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FormContactsComponent } from './components/form-contacts/form-contacts.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { StarsComponent } from './components/stars/stars.component';
import { RateComponent } from './components/rate/rate.component';
import { NoResultsComponent } from './no-results.component';
// custom modules
import { SharedModule } from '../../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    GmapComponent,
    ServicesComponent,
    ImageGalleryComponent,
    ReservationsComponent,
    FormSearchComponent,
    FormContactsComponent,
    HotelListComponent,
    StarsComponent,
    RateComponent,
    NoResultsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
