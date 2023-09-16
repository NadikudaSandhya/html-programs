import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  @Input() address: string | null = null;

  ngOnInit(): void {
    if (this.address) {
      // Initialize and display Google Map with a marker at the given address
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: this.address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
        if (status === 'OK') {
          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
          map.setCenter(results[0].geometry.location);
        } else {
          // Handle geocoding error
        }
      });
    }
  }
}
