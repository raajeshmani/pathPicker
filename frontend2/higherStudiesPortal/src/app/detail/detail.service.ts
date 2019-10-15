import { Injectable } from '@angular/core';
import { SyncService } from '../sync.service';
import { Observable } from 'rxjs';

const GET_COURSE_URL = 'api/course/';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private syncService: SyncService) { }

  getCourses(): Observable<Object> {
    return this.syncService.get(GET_COURSE_URL, null);
  }

  getCourse(id): Observable<Object> {
    return this.syncService.get(GET_COURSE_URL+id+'/', null);
  }
}
