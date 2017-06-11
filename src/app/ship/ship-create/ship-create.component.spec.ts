import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipCreateComponent } from './ship-create.component';

describe('ShipCreateComponent', () => {
  let component: ShipCreateComponent;
  let fixture: ComponentFixture<ShipCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
