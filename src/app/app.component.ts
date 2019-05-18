import { Component, ViewChild, OnInit } from '@angular/core';
import { MerchandiseList } from './models/merchandiseList.model';
import { FinancialControl } from './models/financialControl.model';
import { ExtractComponent } from './extract/extract.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild(ExtractComponent) extractChild;
	public financialControl: FinancialControl;

	constructor() {
        let merchandiseList = JSON.parse(localStorage.getItem('merchandiseList'));
		this.financialControl = {
			merchandiseList: merchandiseList ? merchandiseList : [], 
			transactionTypes: []
        };
    }

    ngOnInit() {
        this.calculateTotal(this.financialControl.merchandiseList);
    }
    
    private calculateTotal(merchandiseList: MerchandiseList[]) {
        this.extractChild.calculateTotal(merchandiseList);
    }
}
