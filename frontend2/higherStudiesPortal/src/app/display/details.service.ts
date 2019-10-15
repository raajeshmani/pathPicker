import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SyncService } from '../sync.service';
import { constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private syncService: SyncService) { }

  getItems(class_name,params): Observable<Object> {
    return this.syncService.get(constants.GET_API_URL+class_name+'/', params);
  }


}
