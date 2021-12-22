import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkinglotComponent } from './add-parkinglot.component';

describe('AddParkinglotComponent', () => {
  let component: AddParkinglotComponent;
  let fixture: ComponentFixture<AddParkinglotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParkinglotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkinglotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
