import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRecoveryCodeView } from './account-recovery-code-view';

describe('AccountRecoveryCodeView', () => {
  let component: AccountRecoveryCodeView;
  let fixture: ComponentFixture<AccountRecoveryCodeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountRecoveryCodeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountRecoveryCodeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
