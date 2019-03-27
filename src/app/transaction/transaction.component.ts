import { Component, OnInit, Input } from '@angular/core';
import { FinancialControl } from '../models/financialControl.model';
import { CurrencyFormatter } from '../utils/currencyFormatter';

@Component({
	selector: 'transaction',
	templateUrl: './transaction.html',
	styleUrls: ['./transaction.scss']
})

export class TransactionComponent implements OnInit {
	@Input() financialControl: FinancialControl;
	private transactionType;
	private merchandise;
	private value;
	private hasAllValues;

	constructor(private currencyFormatter: CurrencyFormatter) {
    }

	ngOnInit() {
		this.financialControl.transactionTypes = [
			{id: -1, name: "Selecione"},
			{id: 1, name: "Compra"},
			{id: 2, name: "Venda"}
		];
		this.clearValues();
	}

	private addMerchandise(type: number, merchandise: string, value: string | number) {
		if (this.checkValues()) {
			this.financialControl.merchandiseList.push({
				transactionType: type,
				name: merchandise,
				value: this.currencyFormatter.currencyParse(value)
			});
			localStorage.setItem('merchandiseList', JSON.stringify(this.financialControl.merchandiseList));

			this.clearValues();
		}
	}
	
	private formatCurrency(value) {
		return this.currencyFormatter.formatCurrency(value);
	}

	private clearValues() {
		this.transactionType = -1;
		this.merchandise = "";
		this.value = "R$ 0,00";
		this.hasAllValues = false;
	}

	private checkValues() {
		if (this.transactionType != -1 && this.merchandise.trim() != "" && this.currencyFormatter.currencyParse(this.value) != 0) {
			this.hasAllValues = true;
		} else {
			this.hasAllValues = false;
		}
		return this.hasAllValues;
	}

}
