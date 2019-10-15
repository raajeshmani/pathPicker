import { Injectable } from '@angular/core';
import { SyncService } from '../sync.service';
import { Observable } from 'rxjs';
import {constants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private syncService: SyncService) { }

  
  getItem(class_name,id): Observable<Object> {
    return this.syncService.get(constants.GET_API_URL+class_name+'/'+id+'/', null);
  }
}
