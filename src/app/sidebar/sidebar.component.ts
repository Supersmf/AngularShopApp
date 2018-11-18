import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items$: Object;

	constructor(private data: DataService) { }

	ngOnInit() {
		this.items$ = this.data.getData();
	}

}
