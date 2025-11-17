import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationOfCreatingUserView } from './confirmation-of-creating-user-view';

describe('ConfirmationOfCreatingUserView', () => {
  let component: ConfirmationOfCreatingUserView;
  let fixture: ComponentFixture<ConfirmationOfCreatingUserView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationOfCreatingUserView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationOfCreatingUserView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
