import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccommodationDetailsView } from './user-accommodation-details-view';

describe('UserAccommodationDetailsView', () => {
  let component: UserAccommodationDetailsView;
  let fixture: ComponentFixture<UserAccommodationDetailsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAccommodationDetailsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccommodationDetailsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
