import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepAllComponent } from './rep-all.component';

describe('RepAllComponent', () => {
  let component: RepAllComponent;
  let fixture: ComponentFixture<RepAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
