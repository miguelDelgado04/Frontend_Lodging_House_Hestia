import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingDeletionConfirmationView } from './hosting-deletion-confirmation-view';

describe('HostingDeletionConfirmationView', () => {
  let component: HostingDeletionConfirmationView;
  let fixture: ComponentFixture<HostingDeletionConfirmationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostingDeletionConfirmationView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingDeletionConfirmationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
