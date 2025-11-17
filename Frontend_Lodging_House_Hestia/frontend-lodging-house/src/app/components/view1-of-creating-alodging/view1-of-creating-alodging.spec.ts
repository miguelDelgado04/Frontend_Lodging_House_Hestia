import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1OfCreatingALodging } from './view1-of-creating-alodging';

describe('View1OfCreatingALodging', () => {
  let component: View1OfCreatingALodging;
  let fixture: ComponentFixture<View1OfCreatingALodging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View1OfCreatingALodging]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View1OfCreatingALodging);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
