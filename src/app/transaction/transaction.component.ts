import { Component, OnInit, Input } from '@angular/core';
import { TransactionTypes } from '../models/transactionTypes.model';
import { MerchandiseList } from '../models/merchandiseList.model';
import { FinancialControl } from '../models/financialControl.model';
import { CurrencyFormatter } from '../models/currencyFormatter';

@Component({
	selector: 'transaction',
	templateUrl: './transaction.html',
	styleUrls: ['./transaction.scss']
})

export class TransactionComponent implements OnInit {
	@Input() financialControl: FinancialControl;
	private transactionType = -1;
	private merchandise = "";
	private value = "R$ 0,00";
	private isAllValues = true;

	constructor(private currencyFormatter: CurrencyFormatter) {
    }

	ngOnInit() {
		this.financialControl.transactionTypes = [
			{id: -1, name: "Selecione"},
			{id: 1, name: "Compra"},
			{id: 2, name: "Venda"}
		];
	}

	private addMerchandise(type: number, merchandise: string, value: string | number) {
		if (type == -1 || merchandise.trim() == "" || value == 0) {
			// Do the exception here
		} else {
			this.financialControl.merchandiseList.push({
				transactionType: type,
				name: merchandise,
				value: this.currencyFormatter.currencyParse(value)
			});
			console.log(this.financialControl.merchandiseList)
			localStorage.setItem('merchandiseList', JSON.stringify(this.financialControl.merchandiseList));
			console.log("Merchandise")
			console.log(JSON.parse(localStorage.getItem('merchandiseList')));
		}
	}
	
	private formatCurrency(value) {
		return this.currencyFormatter.formatCurrency(value);
	}

	private hasAllValues() {
		if (this.transactionType == -1) return false
		else if (this.merchandise.trim() == "") return false
		else if (this.value.replace(/[\D]+/g, '') == "0") return false

		return true;
	}

}
