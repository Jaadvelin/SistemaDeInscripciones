import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
		user = {valid: false, name: "User test"};

		onAuth(){
				this.user.valid = true;
		}
}
