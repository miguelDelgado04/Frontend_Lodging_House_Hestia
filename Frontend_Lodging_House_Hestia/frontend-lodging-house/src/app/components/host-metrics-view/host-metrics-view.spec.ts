import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostMetricsView } from './host-metrics-view';

describe('HostMetricsView', () => {
  let component: HostMetricsView;
  let fixture: ComponentFixture<HostMetricsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostMetricsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostMetricsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
