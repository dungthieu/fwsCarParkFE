import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookingofficeComponent } from './list-bookingoffice.component';

describe('ListBookingofficeComponent', () => {
  let component: ListBookingofficeComponent;
  let fixture: ComponentFixture<ListBookingofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookingofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookingofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
