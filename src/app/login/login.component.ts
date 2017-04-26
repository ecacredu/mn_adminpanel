import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LoginService, UserdataService } from '../services/index';
import * as firebase from "firebase";
import { Router } from '@angular/router';
@Component({
    selector: 'as-login',
    templateUrl: './login.html',
		styleUrls:['../app.component.min.css']
})
export class loginComponent {
    @Input() brand: string;
		provider:any;
		constructor( private router: Router, public login:LoginService,private issue:UserdataService) {
			login.redirectTo="/login";
			login.checkUserIsLoggedIn();
		}

		googleLogin(){
			this.provider=new firebase.auth.GoogleAuthProvider();
			this.login.userLogin(this.provider);
		}

}
