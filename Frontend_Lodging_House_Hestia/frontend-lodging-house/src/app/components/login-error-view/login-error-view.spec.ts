import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginErrorView } from './login-error-view';

describe('LoginErrorView', () => {
  let component: LoginErrorView;
  let fixture: ComponentFixture<LoginErrorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginErrorView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginErrorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
