import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {UserdataService,LoginService} from '../services/index';
import { CoolLocalStorage } from 'angular2-cool-storage';
@Component({
    selector: 'as-pendingIssues',
    templateUrl: './pendingIssues.html',
		styleUrls:['../app.component.min.css']
})
export class pendingIssuesComponent {
    @Input() brand: string;
		value:any='resolved';
		society:any='';
		status:any='';
		Local: CoolLocalStorage;
		constructor(public af: AngularFire,public login:LoginService, public issue: UserdataService) {
			login.redirectTo="/pending-issues";
			login.checkUserIsLoggedIn();
		}

}
