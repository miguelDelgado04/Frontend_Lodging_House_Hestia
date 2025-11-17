import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostProfileView } from './host-profile-view';

describe('HostProfileView', () => {
  let component: HostProfileView;
  let fixture: ComponentFixture<HostProfileView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostProfileView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostProfileView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
