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

	calculateTotal(merchandiseList: MerchandiseList[]) {
		merchandiseList.forEach(merchandise => {
			if (merchandise.transactionType == 1)
				this.total-= merchandise.value;
			else
				this.total+= merchandise.value;
		});

		if (this.total < 0) {
			this.info = "PREJUÍZO";
		} else if (this.total > 0) {
			this.info = "LUCRO";
		} else {
			this.info = "--";
		}
    }
}
