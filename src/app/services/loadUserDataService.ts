import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import {Observable} from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Injectable()
export class UserdataService {
    Issues:Observable<any>;
    countIssues:any=0;
		pendingIssues:any=0;
	constructor( public af: AngularFire ) {
        this.getUserDetail();
    }
	getUserDetail(){
        this.Issues=this.af.database.list('/issues').map((arr:any)=>{ return arr.reverse(); });
        this.Issues.subscribe((allIssues:any)=>{
            this.countIssues=0;
            for(let i=0 ; i<allIssues.length ; i++){
                    this.countIssues=this.countIssues+1;
										if(allIssues[i].status =='unresolved'){
											this.pendingIssues = this.pendingIssues+1;
										}
            }


        });

    }
}
