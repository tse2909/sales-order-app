import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepCreateComponent } from './rep-create.component';

describe('RepCreateComponent', () => {
  let component: RepCreateComponent;
  let fixture: ComponentFixture<RepCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
