import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginRoutes } from '../login/index';
import {AllissuesRoutes} from '../Allissues/index';
import {pendingIssuesRoutes} from '../pendingIssues/index'
import {chatsRoutes} from '../chats/index';


const appRoutes: Routes = [
	...LoginRoutes,
	...AllissuesRoutes,
	...pendingIssuesRoutes,
	...chatsRoutes
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
