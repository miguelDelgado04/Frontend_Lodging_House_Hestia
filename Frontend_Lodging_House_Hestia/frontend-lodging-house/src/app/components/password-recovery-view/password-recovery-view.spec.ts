import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryView } from './password-recovery-view';

describe('PasswordRecoveryView', () => {
  let component: PasswordRecoveryView;
  let fixture: ComponentFixture<PasswordRecoveryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordRecoveryView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordRecoveryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
