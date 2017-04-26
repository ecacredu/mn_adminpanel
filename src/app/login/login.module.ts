import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { loginComponent } from './index';

@NgModule({
    declarations: [
        loginComponent
    ],
    imports: [
        RouterModule,
				BrowserModule,
				FormsModule
    ],
    exports: [
        loginComponent
    ]
})
export class loginModule {
}
