import { Component, Input, SimpleChanges } from '@angular/core';
import { MerchandiseList } from '../models/merchandiseList.model';

@Component({
	selector: 'extract',
	templateUrl: './extract.html',
	styleUrls: ['./extract.scss']
})
export class ExtractComponent {
	@Input() merchandiseList: MerchandiseList[];
	private total: number = 0;
	private info: string = "";

	getInfoExtract(merchandiseList) {
		let total = 0;
		merchandiseList.forEach(merchandise => {
			if (merchandise.transactionType == 1)
				total+= parseFloat(merchandise.value);
			else
				total-= parseFloat(merchandise.value);
		});

		if (total < 0) {
			this.info = "PREJUÍZO";
		} else if (total > 0) {
			this.info = "LUCRO";
		} else {
			this.info = "--";
		}

		return total;
	}
}
