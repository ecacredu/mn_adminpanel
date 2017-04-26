import { Pipe, PipeTransform } from '@angular/core';

import { userListComponent } from '../userList/index';

@Pipe({ name: 'emailFilter' })
export class emailFilterPipe implements PipeTransform {
  transform(Issues: any,value:any,searched:any,society:any,status:any) {
		if(Issues==null){
			return [];
		}
    return Issues.filter(issue => issue.status !=value && this.checkIssue(issue,searched) && this.checkSociety(issue,society) && this.checkStatus(issue,status));
  }

checkIssue(issue:any,searched:any){
	if(!searched){
		return true;
	}
	if(searched !=undefined && searched !='' && (issue.title.toLowerCase()).includes(searched.toLowerCase()) || (issue.description.toLowerCase()).includes(searched.toLowerCase())){
		return true;
	}else{
		return false;
	}
}

checkSociety(issue:any,society:any){
	console.log(issue.society);
	console.log(society);
	if(!society){
		return true;
	}
	if(society !=undefined && society !='' && issue.society.toLowerCase()==society.toLowerCase()){
		return true;
	}else{
		return false;
	}
}

checkStatus(issue:any,status:any){

	if(!status){
		return true;
	}
	if(status !=undefined && status !='' && issue.status.toLowerCase()==status.toLowerCase()){
		return true;
	}else{
		return false;
	}
}

}
