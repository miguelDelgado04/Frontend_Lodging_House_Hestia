import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeView } from './password-change-view';

describe('PasswordChangeView', () => {
  let component: PasswordChangeView;
  let fixture: ComponentFixture<PasswordChangeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordChangeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordChangeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
