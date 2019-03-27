import { Component } from '@angular/core';

@Component({
	selector: 'header',
	templateUrl: './header.html',
	styleUrls: ['./header.scss']
})
export class HeaderComponent {
	private show: boolean = false;
	private menuImagePath: string = 'assets/img/menu.png';

	private showMenu() {
		this.show = !this.show;
		this.menuImagePath = this.show ? 'assets/img/close.png' : 'assets/img/menu.png';
	}

}
