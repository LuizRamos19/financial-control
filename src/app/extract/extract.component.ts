import { Component, Input, OnInit } from '@angular/core';
import { MerchandiseList } from '../models/merchandiseList.model';

@Component({
	selector: 'extract',
	templateUrl: './extract.html',
	styleUrls: ['./extract.scss']
})
export class ExtractComponent implements OnInit {
	@Input() merchandiseList: MerchandiseList[];

	ngOnInit() {
		this.merchandiseList = [
			{transactionType: 1, name: "TEste", value: 12	},

		]
	}
}
