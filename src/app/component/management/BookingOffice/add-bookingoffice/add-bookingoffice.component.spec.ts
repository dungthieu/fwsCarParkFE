import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingofficeComponent } from './add-bookingoffice.component';

describe('AddBookingofficeComponent', () => {
  let component: AddBookingofficeComponent;
  let fixture: ComponentFixture<AddBookingofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookingofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookingofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
