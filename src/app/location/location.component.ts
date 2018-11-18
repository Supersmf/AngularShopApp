import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Shop } from '../models/shop';
import { Marker } from '../models/marker';


declare var ymaps:any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

	items$: Shop[];
	markers: Marker[] = [];

	zoom: number = 12;
	lat: number = 53.9;
	lng: number = 27.55;

  	constructor(private data: DataService) {}

  ngOnInit() {
  	this.items$ = this.data.getData();
  	this.items$.forEach(e => {
  		this.markers.push({
  			lat: e.geo.lat,
  			lng: e.geo.lng,
  			label: e.company,
  			draggable: false})
  		})
	}

}
