import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemErrorView } from './system-error-view';

describe('SystemErrorView', () => {
  let component: SystemErrorView;
  let fixture: ComponentFixture<SystemErrorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemErrorView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemErrorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
