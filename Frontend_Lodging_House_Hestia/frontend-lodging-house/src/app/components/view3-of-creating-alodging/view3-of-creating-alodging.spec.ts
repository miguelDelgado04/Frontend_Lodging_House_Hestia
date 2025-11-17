import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View3OfCreatingALodging } from './view3-of-creating-alodging';

describe('View3OfCreatingALodging', () => {
  let component: View3OfCreatingALodging;
  let fixture: ComponentFixture<View3OfCreatingALodging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View3OfCreatingALodging]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View3OfCreatingALodging);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
