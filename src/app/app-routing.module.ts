import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component'
import { DetailsComponent } from './details/details.component'
import { NewshopComponent } from './newshop/newshop.component'

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'details/:id',
		component: DetailsComponent
	},
	{
		path: 'newshop',
		component: NewshopComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
