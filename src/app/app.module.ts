import { BrowserModule } from '@angular/platform-browser';
import { CoolStorageModule } from 'angular2-cool-storage';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {loginModule} from './login/index'
import { AppComponent } from './app.component';
import * as firebase from "firebase";
import { AngularFireModule } from 'angularfire2';
import {PipeModule} from './Pipes/pipes.module';
import {AppRoutingModule} from './Routes/index';
import {LoginService,UserdataService,chatService} from './services/index';
import {Ng2PaginationModule} from 'ng2-pagination';
import {AllissuesModule} from'./Allissues/index';
import {pendingIssuesModule} from './pendingIssues/index';
import {chatsModule} from './chats/index';
import {ModalModule} from "ngx-modal";

export const firebaseConfig = {
	 apiKey: "AIzaSyD8oT4vuJhQKRSXk3eNP84WcwZa-2cfOEA",
	 authDomain: "my-nagarsevak.firebaseapp.com",
	 databaseURL: "https://my-nagarsevak.firebaseio.com",
	 projectId: "my-nagarsevak",
	 storageBucket: "my-nagarsevak.appspot.com",
	 messagingSenderId: "455743016876"
}

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		chatsModule,
		AngularFireModule.initializeApp(firebaseConfig),
		loginModule,
		PipeModule,
		AppRoutingModule,
    Ng2PaginationModule,
		AllissuesModule,
		pendingIssuesModule,
		ModalModule,
    CoolStorageModule.forRoot()
  ],
  providers: [LoginService,UserdataService,chatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
