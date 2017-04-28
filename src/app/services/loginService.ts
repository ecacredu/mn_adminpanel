import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { CoolLocalStorage } from 'angular2-cool-storage';


@Injectable()
export class LoginService {
	Local: CoolLocalStorage;
	constructor(private router: Router, public af: AngularFire,localStorage: CoolLocalStorage) {
		this.Local=localStorage;
	}

	UserIdentification:any;
	adminProfile:any;
	checkUserStatus: boolean = false;

	redirectTo:any='/allissues';
	userLogin(provider: any): any {
		firebase.auth().signInWithPopup(provider).then((data: any) => {
		this.checkUserIsAdmin(firebase.auth().currentUser.uid);
		}).catch(function (error) {
			console.log(error);
		});
	}


	checkUserIsLoggedIn() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
			this.checkUserIsAdmin(firebase.auth().currentUser.uid);
		}
		});
	}

	checkUserIsAdmin(userId):any{
		this.UserIdentification=userId;
			firebase.database().ref('/users/' + userId + '/Isadmin').once('value').then((data: any) => {
				if (data.val() == 'true' || data.val()) {
					if(this.redirectTo == '/login'){
						this.redirectTo='/allissues';
					}
					this.checkUserStatus = true;
					this.router.navigate([this.redirectTo]);
					this.af.database.object('users/'+this.UserIdentification+'/profile').subscribe((profile:any)=>{
						this.adminProfile=profile;
					});
				} else {
					alert('You are not an Admin');
					this.checkUserStatus = false;
					this.router.navigate(['/login']);
				}
			});
	}

	checkUserAlreadyExists(Uid) {
		firebase.database().ref('users').once('value').then((check) => {
			if (check.hasChild(Uid)) {
				this.logout();
			} else {
				console.log('user not exists');
				this.deleteUser();
			}
		});
	}

	deleteUser() {
		var user = firebase.auth().currentUser;
		user.delete().then((data: any) => {
			// console.log('user deleted');
		}).catch((error:any)=>{
			console.log('got error while deleting user '+error);
		})
	}



	logout() {
		this.af.auth.logout().then((data: any) => {
			// console.log('logOut');
			this.Local.setItem('check','false');
			this.checkUserStatus = false;
			this.router.navigate(['/login']);
		}).catch((erroe: any) => {

		})
	}


}
