import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartHomeComponent } from './product-cart-home.component';

describe('ProductCartHomeComponent', () => {
  let component: ProductCartHomeComponent;
  let fixture: ComponentFixture<ProductCartHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCartHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
