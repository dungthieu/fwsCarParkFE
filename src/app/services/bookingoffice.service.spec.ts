import { TestBed } from '@angular/core/testing';

import { BookingofficeService } from './bookingoffice.service';

describe('BookingofficeService', () => {
  let service: BookingofficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingofficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
