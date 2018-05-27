import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySignInComponent } from './my-sign-in.component';

describe('MySignInComponent', () => {
  let component: MySignInComponent;
  let fixture: ComponentFixture<MySignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
