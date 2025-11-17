import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSuccessView } from './booking-success-view';

describe('BookingSuccessView', () => {
  let component: BookingSuccessView;
  let fixture: ComponentFixture<BookingSuccessView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingSuccessView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSuccessView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
