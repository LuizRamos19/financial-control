import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "currencyFormatted" })
export class CurrencyFormatter implements PipeTransform {
    private CURRENCY;

    constructor() {
        this.CURRENCY = "R$ ";
    }

    transform(value: number | string, fractionFixed: number = 2): string {
        let [ integer, float = "" ] = (value || "").toString().split(".");
        if (!integer) {
            integer = "0";
        }
        if (fractionFixed > 0) {
            float = this.getFloatFormatted(float, fractionFixed);
        } else {
            float = "";
        }
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        
        return this.CURRENCY + integer + float;
    }

    private getFloatFormatted(float, fractionFixed) {
        return "," + (float + "000000").substring(0, fractionFixed);
    }

    private formatCurrencyNoDecimals(value) {
		var regex = /(\d+)(\d{3})/;
		while(regex.test(value)) {
			value = value.replace(regex, '$1' + '.' + '$2');
        }
		return this.CURRENCY + ' ' + value;
	}
	
	public formatCurrency(value) {
		value = value.replace( /[^0-9]/g, '' );
	
        if(value.length == 0) value = "0.00";
        else if(value.length == 1) value = "0.0" + value;
        else if(value.length == 2) value = "0." + value;
        else value = value.substring(0, value.length - 2) + '.' + value.substring(value.length - 2, value.length);
    
        value = new Number(value);
        value = value.toFixed(2);
        value = value.replace(/\./g, ',');
        let p = value.split(',');
        let p1 = p[0];
        let p2 = p.length > 1 ? ',' + p[1] : '';
	
		return this.formatCurrencyNoDecimals(p1) + p2;
    }
    
    public currencyParse(numberString) {
		return parseFloat(numberString.replace(/[.]/g, '').replace(',', '.').replace(this.CURRENCY, ''));
	}

}