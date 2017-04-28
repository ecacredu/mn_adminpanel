import { Pipe, PipeTransform } from '@angular/core';

import { userListComponent } from '../userList/index';

@Pipe({ name: 'queryFilter' })
export class queryFilterPipe implements PipeTransform {
        transform(queries: any, userId:any) {
            if(queries==null){
			return [];
		}
            return queries.filter(query => (query.agentId=='any') || (query.agentId== userId));

        }


}