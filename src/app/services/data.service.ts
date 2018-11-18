import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Shop } from '../models/shop';


@Injectable({
  providedIn: 'root'
})
export class DataService{

	constructor(private http: HttpClient) {
		if(!JSON.parse(localStorage.getItem('shops'))){
			this.setLocalStorageShops(require('../../assets/data.json'));
		}		
	}

	getData(): Shop[] {
		return JSON.parse(localStorage.getItem('shops')).shops;
	}

	getShop(id: number): Shop{
		let shops = this.getData();
		return shops.filter(e => e.id === id)[0];
	}

	updateShop(item: Shop): void {
		let shops = this.getData();

		shops.forEach((e, i) => {
			if(e.id === item.id){
				shops.splice(i, 1, item);
			}});

		this.setLocalStorageShops(shops);
	}

	addShop(shop: Shop){
		let data = this.getData();
		shop.id = data[data.length-1].id + 1;
		data.push(shop);
		this.setLocalStorageShops(data);
	}

	deleteShop(id: number){
		let shops = this.getData();

		shops.forEach((e, i) => {
			if(e.id === id){
				shops.splice(i, 1);
			}});

		this.setLocalStorageShops(shops);
	}

	private setLocalStorageShops(shops: Shop[]): void {
		localStorage.setItem('shops', JSON.stringify({ shops: shops }));
	}
}
