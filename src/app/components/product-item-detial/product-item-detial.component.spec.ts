import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDetialComponent } from './product-item-detial.component';

describe('ProductItemDetialComponent', () => {
  let component: ProductItemDetialComponent;
  let fixture: ComponentFixture<ProductItemDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemDetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
