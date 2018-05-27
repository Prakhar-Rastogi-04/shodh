import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpSectionComponent } from './dp-section.component';

describe('DpSectionComponent', () => {
  let component: DpSectionComponent;
  let fixture: ComponentFixture<DpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
