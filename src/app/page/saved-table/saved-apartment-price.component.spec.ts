import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedApartmentPriceComponent } from './saved-apartment-price.component';

describe('SavedTableComponent', () => {
  let component: SavedApartmentPriceComponent;
  let fixture: ComponentFixture<SavedApartmentPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedApartmentPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedApartmentPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
