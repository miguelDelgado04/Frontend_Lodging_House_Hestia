import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCreationView } from './reservation-creation-view';

describe('ReservationCreationView', () => {
  let component: ReservationCreationView;
  let fixture: ComponentFixture<ReservationCreationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationCreationView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationCreationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
