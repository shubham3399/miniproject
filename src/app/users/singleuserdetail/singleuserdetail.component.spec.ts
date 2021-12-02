import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleuserdetailComponent } from './singleuserdetail.component';

describe('SingleuserdetailComponent', () => {
  let component: SingleuserdetailComponent;
  let fixture: ComponentFixture<SingleuserdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleuserdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleuserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
