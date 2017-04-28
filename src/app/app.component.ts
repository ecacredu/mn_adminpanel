import { Component } from '@angular/core';
import { LoginService, UserdataService} from './services/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.min.css']
})
export class AppComponent {
	constructor(private login:LoginService, private issue:UserdataService) {
    console.log('App launched!');
    
	}


}
