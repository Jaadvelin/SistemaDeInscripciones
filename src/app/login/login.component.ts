import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
		@Output() auth = new EventEmitter<any>();
		constructor() { }
		
		ngOnInit() {
		}

		login(){
				this.auth.emit(true);
		}
}
