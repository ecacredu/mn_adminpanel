import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chatsFilter' })
export class chatsFilterPipe implements PipeTransform {

	
  transform(Queries: any,value:any,searched:any,society:any,status:any) {
		if(Queries==null){
			return [];
		}
    return Queries.filter(query => query.status !=value && this.checkquery(query,searched) && this.checkSociety(query,society) && this.checkStatus(query,status));
  }

checkquery(query:any,searched:any){
	if(!searched){
		return true;
	}
	if(searched !=undefined && searched !='' && (query.userName.toLowerCase()).includes(searched.toLowerCase()) || (query.status.toLowerCase()).includes(searched.toLowerCase())){
		return true;
	}else{
		return false;
	}
}

checkSociety(query:any,society:any){
	if(!society){
		return true;
	}
	if(society !=undefined && society !='' && query.user.society.toLowerCase()==society.toLowerCase()){
		return true;
	}else{
		return false;
	}
}

checkStatus(query:any,status:any){

	if(!status){
		return true;
	}
	if(status !=undefined && status !='' && query.status.toLowerCase()==status.toLowerCase()){
		return true;
	}else{
		return false;
	}
}

}