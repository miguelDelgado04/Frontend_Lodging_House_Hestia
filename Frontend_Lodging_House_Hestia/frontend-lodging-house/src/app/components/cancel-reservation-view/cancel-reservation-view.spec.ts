import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelReservationView } from './cancel-reservation-view';

describe('CancelReservationView', () => {
  let component: CancelReservationView;
  let fixture: ComponentFixture<CancelReservationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelReservationView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelReservationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
