import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { BrowserModule } from "@angular/platform-browser";
import { } from 'googlemaps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @Input() city: string;
  @Output() getMapPlaces = new EventEmitter();

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 41.3948976;
    this.longitude = 2.0787279;

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
          console.log('placido',place.formatted_address)
          this.city = place.formatted_address;
          this.getMapPlaces.emit(place.formatted_address);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
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