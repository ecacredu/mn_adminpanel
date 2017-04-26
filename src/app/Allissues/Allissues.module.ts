import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AllissuesComponent } from './index';
import {PipeModule} from '../Pipes/pipes.module';
import {Ng2PaginationModule} from 'ng2-pagination';
import { CoolStorageModule } from 'angular2-cool-storage';



@NgModule({
    declarations: [
        AllissuesComponent
    ],
    imports: [
        RouterModule,
				BrowserModule,
				FormsModule,
				PipeModule,
        Ng2PaginationModule,
        CoolStorageModule
    ],
    exports: [
        AllissuesComponent
    ]
})
export class AllissuesModule {
}
