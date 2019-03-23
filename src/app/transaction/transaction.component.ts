import { Component, OnInit } from '@angular/core';
import { TransactionTypes } from '../models/transactionTypes.model';

@Component({
	selector: 'transaction',
	templateUrl: './transaction.html',
	styleUrls: ['./transaction.scss']
})
export class TransactionComponent implements OnInit {
	private transactionType = -1;
	private merchandise = "Teste";
	private value = "12.00";

	private transactionTypes: TransactionTypes[] = [
		{id: -1, name: "Selecione"},
		{id: 1, name: "Compra"},
		{id: 2, name: "Venda"}
	]

	ngOnInit() {

	}

	public addMerchandise(type, merchandise, value) {
		if (type == -1 || merchandise.trim() == "" || value == 0) {
			// Do the exception here
		}
	}
}
