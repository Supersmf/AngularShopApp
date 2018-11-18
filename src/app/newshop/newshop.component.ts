import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Shop } from '../models/shop';

@Component({
  selector: 'app-newshop',
  templateUrl: './newshop.component.html',
  styleUrls: ['./newshop.component.scss']
})
export class NewshopComponent implements OnInit {

	constructor(private data: DataService, private router: Router) {}

	ngOnInit() {}

	onSubmit(item){
		this.data.addShop({
			id: 0,
			company: item.value.title,
			city: item.value.city,
			street: item.value.street,
			suite: item.value.suite,
			email: item.value.email,
			phone: item.value.phone,
			website: item.value.website,
			geo: {
				lat: item.value.lat,
				lng: item.value.lng
			},
			goods: []
		});

		this.navigate('');
	}

	navigate(link: string) {
        this.router.navigateByUrl(`/${link}`);
    }
}