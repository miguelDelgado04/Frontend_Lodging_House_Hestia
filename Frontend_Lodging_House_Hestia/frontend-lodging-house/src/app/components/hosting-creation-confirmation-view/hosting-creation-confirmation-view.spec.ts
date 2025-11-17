import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingCreationConfirmationView } from './hosting-creation-confirmation-view';

describe('HostingCreationConfirmationView', () => {
  let component: HostingCreationConfirmationView;
  let fixture: ComponentFixture<HostingCreationConfirmationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostingCreationConfirmationView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingCreationConfirmationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
