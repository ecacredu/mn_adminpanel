import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { chatService, LoginService } from '../services/index';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Modal } from "ngx-modal";
import * as firebase from "firebase";
declare var Date:any;


@Component({
	selector: 'as-chats',
	templateUrl: './chats.html',
	styleUrls: ['../app.component.min.css']
})
export class chatsComponent {
	currentChat: any;
	@Input() brand: string;
	@ViewChild('myModal') myModal: Modal;
	@ViewChild('scrollMe') private myScrollContainer: ElementRef;

	value: any = 'null';
	society: any = '';
	status: any = '';

	textMessage: String = '';
	currentChatMessages: FirebaseListObservable<any>;
	Local: CoolLocalStorage;
	tempChatId: any;
	constructor(public af: AngularFire, public login: LoginService, public chats: chatService) {
		login.redirectTo = "/chats";
		login.checkUserIsLoggedIn();
	}

	openChat(chatId: any, chatNumber: any) {
		this.currentChat = this.chats.subscribedQueryList[chatNumber];
		this.currentChatMessages = this.af.database.list('/chats/' + chatId + '/messages');
		this.af.database.object('/chats/' + chatId + '/agentId').set(this.login.UserIdentification);
		this.af.database.object('/chats/' + chatId + '/agentName').set(this.login.adminProfile.name);
		this.af.database.object('/chats/' + chatId + '/agentUnreadCount').set('0');
		this.tempChatId = chatId;
	}

	getLastMessage(m: any) {
		let tempArr = [];
		let messages = JSON.parse(m);
		tempArr.push(messages);
		let size = tempArr.length;
		let msg = tempArr[size - 1];
		return msg[Object.keys(msg)[Object.keys(msg).length - 1]].message;
	}


	openQuery(agentId: any, chatId: any, num: any) {
		if (agentId == 'any') {
			var r = confirm("Do you wish to attend the user?");
			if (r == true) {
				console.log('true');
				this.openChat(chatId, num);
				this.textMessage='';				
				this.myModal.open();
				setTimeout(() => { this.scrollToBottom(); }, 500);
				
			}
		} else {
			this.openChat(chatId, num);
			this.textMessage='';
			this.myModal.open();
			setTimeout(() => { this.scrollToBottom(); }, 100);
			
		}
	}

	sendMsg() {
		if (this.textMessage.match(/[a-z]/i)) {
			var messageObject = { date: new Date().toString('yyyy/M/d HH:mm:ss'), message: this.textMessage, senderType: 'agent', timestamp: (Math.round(new Date().getTime())).toString() }
			this.af.database.list('/chats/' + this.tempChatId + '/messages').push(messageObject);

			firebase.database().ref('/chats/' + this.tempChatId + '/userUnreadCount').once('value').then((userUnreadCount: any) => {
				var uuc = userUnreadCount.val();
				uuc = (Number(uuc) + 1).toString();
				this.af.database.object('/chats/' + this.tempChatId + '/userUnreadCount').set(uuc);
				this.textMessage = '';
				setTimeout(() => { this.scrollToBottom(); }, 500);

			});
		}
	}

	stopPropogation(event){
		event.stopPropagation();
	}

	ngOnInit() {
		this.scrollToBottom();
		
	}

	// ngAfterViewChecked() {
	// 	this.scrollToBottom();
	// }

	keyDownFunction(event) {
		if (event.keyCode == 13) {
			this.sendMsg();
		}
	}


	scrollToBottom(): void {
		try {
			this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
		} catch (err) { }
	}

	onValueChange(event:any,key:any){
		this.af.database.object('/chats/' + key + '/status').set(event.currentTarget.value);
	}

}
