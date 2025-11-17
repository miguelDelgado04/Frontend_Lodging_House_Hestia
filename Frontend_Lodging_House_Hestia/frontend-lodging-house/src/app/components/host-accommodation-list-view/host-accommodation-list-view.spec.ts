import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAccommodationListView } from './host-accommodation-list-view';

describe('HostAccommodationListView', () => {
  let component: HostAccommodationListView;
  let fixture: ComponentFixture<HostAccommodationListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostAccommodationListView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostAccommodationListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
