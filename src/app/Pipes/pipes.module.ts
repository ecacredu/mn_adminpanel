import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {emailFilterPipe} from './emailFilterPipe';
@NgModule({
    declarations: [
        // loginComponent
				emailFilterPipe,
    ],
    imports: [
        RouterModule,
				BrowserModule,
				FormsModule
    ],
    exports: [
        // loginComponent
				emailFilterPipe,
    ]
})
export class PipeModule {
}
