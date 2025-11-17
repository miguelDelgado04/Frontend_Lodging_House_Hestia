import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationConfirmationView } from './reservation-confirmation-view';

describe('ReservationConfirmationView', () => {
  let component: ReservationConfirmationView;
  let fixture: ComponentFixture<ReservationConfirmationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationConfirmationView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationConfirmationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
