import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {UserdataService,LoginService} from '../services/index';
import { CoolLocalStorage } from 'angular2-cool-storage';
@Component({
    selector: 'as-Allissues',
    templateUrl: './Allissues.html',
		styleUrls:['../app.component.min.css']
})
export class AllissuesComponent {
    @Input() brand: string;
		value:any='null';
		society:any='';
		status:any='';
		Local: CoolLocalStorage;
		constructor(public af: AngularFire,public login:LoginService, public issue: UserdataService) {
			login.redirectTo="/allissues";
			login.checkUserIsLoggedIn();
		}

}
