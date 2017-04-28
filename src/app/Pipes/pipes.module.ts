import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {emailFilterPipe} from './emailFilterPipe';
import {queryFilterPipe} from './queryFilterPipe';
import {chatsFilterPipe} from './chatsFilter';
@NgModule({
    declarations: [
        // loginComponent
				emailFilterPipe,
                queryFilterPipe,
                chatsFilterPipe
    ],
    imports: [
        RouterModule,
				BrowserModule,
				FormsModule
    ],
    exports: [
        // loginComponent
				emailFilterPipe,
                queryFilterPipe,
                chatsFilterPipe
    ]
})
export class PipeModule {
}
