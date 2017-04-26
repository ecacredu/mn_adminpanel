import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {UserdataService,LoginService} from '../services/index';
import { CoolLocalStorage } from 'angular2-cool-storage';
@Component({
    selector: 'as-userList',
    templateUrl: './userList.html',
		styleUrls:['./userList.min.css']
})
export class userListComponent {
    @Input() brand: string;
	// @ViewChild('someVar') filteredItems;
		count:any = 0;
		email :any ;
		phone :any;
		Local: CoolLocalStorage;	
		constructor(public af: AngularFire, public userdata:UserdataService,public login:LoginService,localStorage: CoolLocalStorage) {
			this.Local=localStorage;
			login.checkUserIsLoggedIn();
			// this.Local.setItem('check','false');
			this.pageReload();	

		}
		Countfunction(){
			this.count=this.count+1;
		}
		pageReload(){
			console.log('here');
			
			if(this.Local.getItem('check')!='true'){
				this.Local.setItem('check','true');
				location.reload();
			}
		}
}
