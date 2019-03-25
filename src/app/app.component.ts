import { Component } from '@angular/core';
import { MerchandiseList } from './models/merchandiseList.model';
import { FinancialControl } from './models/financialControl.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private merchandiseList: MerchandiseList[];
	public financialControl: FinancialControl;

	constructor() {
		this.merchandiseList = JSON.parse(localStorage.getItem('merchandiseList'));
		this.financialControl = {
			merchandiseList: this.merchandiseList ? this.merchandiseList : [], 
			transactionTypes: []
		};
	}
}
