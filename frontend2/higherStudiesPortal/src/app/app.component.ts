import { Component,ChangeDetectorRef,ApplicationRef } from '@angular/core';
import {HttpParams} from  "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cdr:ChangeDetectorRef,private appRef: ApplicationRef){
  }
  college_name;
  expense_min=0;
  expense_max;
  curr_dtype='course';
  course_name;
  course_type;
  params=null;
  title = 'higherStudiesPortal';
  
  search(dtype){
    if(dtype=='college'){
      if(this.college_name){
      this.params = new  HttpParams().set('name__contains', this.college_name);
      console.log('new');
      }
      if(this.expense_max){
        this.params=this.params.set('expenses__range', this.expense_min+','+this.expense_max);
      }
    }
    
    if(dtype=='course'){
      if(this.course_name){
        this.params = new  HttpParams().set('name__contains', this.course_name);
      }
      if(this.course_type){
        this.params=this.params.set('c_type__contains', this.course_type);
      }
    }
    this.curr_dtype=dtype;
  }
}
