import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetalComponent } from './order-detal.component';

describe('OrderDetalComponent', () => {
  let component: OrderDetalComponent;
  let fixture: ComponentFixture<OrderDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
