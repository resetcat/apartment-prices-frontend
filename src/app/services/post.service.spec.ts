import { TestBed } from '@angular/core/testing';

import { ApartmentPriceServices } from './apartment-price-services.service';

describe('PostService', () => {
  let service: ApartmentPriceServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentPriceServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
