import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseApartmentPricesComponent } from './response-apartment-prices.component';

describe('TableComponent', () => {
  let component: ResponseApartmentPricesComponent;
  let fixture: ComponentFixture<ResponseApartmentPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseApartmentPricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseApartmentPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
