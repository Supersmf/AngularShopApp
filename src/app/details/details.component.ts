import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Shop } from '../models/shop';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	item$: Shop;
	itemId: number;
	edit: boolean = true;
	addProduct: boolean = false;

	constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {
		this.route.params.subscribe( params => this.itemId = params.id)
	}

	onEdit(){
		this.edit = !this.edit;
	}

	onAddProduct() {
		this.addProduct = !this.addProduct;
	}

	onSave(){
		this.data.updateShop(this.item$);
		this.ngOnInit();
		this.onEdit();
	}

	onCancel(){
		this.ngOnInit();
		this.onEdit();
	}

	onProductRemove(index) {
		this.item$.goods.splice(index, 1);
		this.data.updateShop(this.item$);
		this.ngOnInit();		
	}

	onCancelAddProduct() {
		this.onAddProduct();
	}

	onSubmit(form){
		this.item$.goods.push({
			name: form.value.productName,
			info: form.value.productDescrption,
			price: form.value.productPrice
		});
		
		this.data.updateShop(this.item$);
		this.onAddProduct();
	}

	onShopDelete(){
		this.data.deleteShop(+this.itemId);
		this.navigate('');
	}

	navigate(link: string) {
        this.router.navigateByUrl(`/${link}`);
    }

	ngOnInit() {
		this.item$ = this.data.getShop(+this.itemId);		
	}

}
