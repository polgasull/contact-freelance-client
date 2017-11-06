import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { BrowserModule } from "@angular/platform-browser";
import { } from '@types/googlemaps';
import { FreelanceApiService } from '../../services/freelance-api.service';

declare let google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @Input() cityQuote: any;
  @Output() getMapPlaces = new EventEmitter();
  place: any;

  public latitude: any;
  public longitude: any;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private freelanceApiService: FreelanceApiService
  ) {}

  ngOnInit() {
    
    //set google maps defaults

    // this.freelanceApiService.getMapsCoords(this.cityQuote)
    // .subscribe((result) => {
    //    this.latitude = result.results[0].geometry.location.lat;
    //    this.longitude = - result.results[0].geometry.location.lng;
    //    console.log(typeof this.latitude, this.latitude, this.longitude)
    //   //  this.latitude = 40.4378698;
    //   //  this.longitude = -3.8196207;
    // })
    // this.zoom = 4;  

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    // this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log('Map res:',place.formatted_address)
          this.cityQuote = place.formatted_address;
          this.getMapPlaces.emit(this.cityQuote);
          //verify result
          // if (place.geometry === undefined || place.geometry === null) {
          //   return;
          // }

          //set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });
  }

  // private setCurrentPosition() {
  //   // if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   // }
  // }
}