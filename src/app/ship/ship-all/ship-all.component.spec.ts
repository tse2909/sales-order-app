import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipAllComponent } from './ship-all.component';

describe('ShipAllComponent', () => {
  let component: ShipAllComponent;
  let fixture: ComponentFixture<ShipAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
