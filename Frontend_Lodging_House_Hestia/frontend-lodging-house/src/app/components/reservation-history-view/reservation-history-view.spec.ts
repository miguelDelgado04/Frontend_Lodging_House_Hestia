import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHistoryView } from './reservation-history-view';

describe('ReservationHistoryView', () => {
  let component: ReservationHistoryView;
  let fixture: ComponentFixture<ReservationHistoryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationHistoryView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationHistoryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
