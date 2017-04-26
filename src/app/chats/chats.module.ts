import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { chatsComponent } from './index';
import {PipeModule} from '../Pipes/pipes.module';
import { CoolStorageModule } from 'angular2-cool-storage';
import {ModalModule} from "ngx-modal";



@NgModule({
    declarations: [
        chatsComponent
    ],
    imports: [
        RouterModule,
				BrowserModule,
				FormsModule,
				PipeModule,
				ModalModule,
        CoolStorageModule
    ],
    exports: [
        chatsComponent
    ]
})
export class chatsModule {
}
