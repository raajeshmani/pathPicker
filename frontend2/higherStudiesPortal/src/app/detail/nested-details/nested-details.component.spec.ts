import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDetailsComponent } from './nested-details.component';

describe('NestedDetailsComponent', () => {
  let component: NestedDetailsComponent;
  let fixture: ComponentFixture<NestedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
