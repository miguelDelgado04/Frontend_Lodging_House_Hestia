import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupFailureView } from './backup-failure-view';

describe('BackupFailureView', () => {
  let component: BackupFailureView;
  let fixture: ComponentFixture<BackupFailureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackupFailureView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupFailureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
