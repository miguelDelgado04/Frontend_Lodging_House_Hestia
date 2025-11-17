import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMainView } from './application-main-view';

describe('ApplicationMainView', () => {
  let component: ApplicationMainView;
  let fixture: ComponentFixture<ApplicationMainView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationMainView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationMainView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
