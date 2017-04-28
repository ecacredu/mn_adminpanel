import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class chatService {
	queryList : FirebaseListObservable<any>;
	subscribedQueryList:any;
	constructor(private router: Router, public af: AngularFire) {
		this.getQueries();
	}
	getQueries(){
		this.queryList = this.af.database.list('/chats');
		this.queryList.subscribe((query:any)=>{
			this.subscribedQueryList = query;
		});
	}

}
